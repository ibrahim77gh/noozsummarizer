import React from 'react'
import News from './News'
import { useLoaderData } from 'react-router-dom';
import { Typography, Stack } from '@mui/material';

const RockwellLoader = async () => {
    try {
    const response = await fetch('https://news-beta-two.vercel.app/rockwell');
    const data = await response.json();
    return data
    } catch (error) {
    console.error('Error fetching data:', error);
    }
};

const Rockwell = () => {
    const stories = useLoaderData()
    return (
        <Stack mt={7}>
            <Typography variant='h3'>Lewrockwell</Typography>
            <News stories={stories}/>
        </Stack>
    )
}

export {Rockwell, RockwellLoader}