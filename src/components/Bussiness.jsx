import React from 'react'
import News from './News'
import { useLoaderData } from 'react-router-dom';
import { Typography, Stack } from '@mui/material';


const BussinessLoader = async () => {
    try {
    const response = await fetch('https://news-beta-two.vercel.app/business');
    const data = await response.json();
    return data
    } catch (error) {
    console.error('Error fetching data:', error);
    }
};

const Bussiness = () => {
    const stories = useLoaderData()
    return (
        <Stack mt={7}>
            <Typography variant='h3'>Seattle Business</Typography>
            <News stories={stories}/>
        </Stack>
    )
}

export {Bussiness, BussinessLoader}