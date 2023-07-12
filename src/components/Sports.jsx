import React from 'react'
import News from './News'
import { useLoaderData } from 'react-router-dom';
import { Typography, Stack } from '@mui/material';

const SportsLoader = async () => {
    try {
    const response = await fetch('https://news-beta-two.vercel.app/sports');
    const data = await response.json();
    return data
    } catch (error) {
    console.error('Error fetching data:', error);
    }
};

const Sports = () => {
    const stories = useLoaderData()
    return (
        <Stack mt={7}>
            <Typography variant='h3'>Seattle Sports</Typography>
            <News stories={stories}/>
        </Stack>
    )
}

export {Sports, SportsLoader}