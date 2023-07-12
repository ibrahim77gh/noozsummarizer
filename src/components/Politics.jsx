import React from 'react'
import { useLoaderData } from 'react-router-dom';
import News from './News'
import { Typography, Stack } from '@mui/material';

const PoliticsLoader = async () => {
    try {
    const response = await fetch('https://news-beta-two.vercel.app/politics');
    const data = await response.json();
    return data
    } catch (error) {
    console.error('Error fetching data:', error);
    }
};


const Politics = () => {
    const stories = useLoaderData()
  return (
    <Stack mt={7}>
        <Typography variant='h3'>Seattle Politics</Typography>
        <News stories={stories}/>
    </Stack>
  )
}

export {Politics, PoliticsLoader}