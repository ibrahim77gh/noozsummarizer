import React from 'react'
import News from './News'
import { useLoaderData } from 'react-router-dom';
import { Typography, Stack } from '@mui/material';

const LocalnewsLoader = async () => {
    try {
    const response = await fetch('https://news-beta-two.vercel.app/localnews');
    const data = await response.json();
    return data
    } catch (error) {
    console.error('Error fetching data:', error);
    }
};

const Localnews = () => {
    const stories = useLoaderData()
    return (
        <Stack mt={7}>
            <Typography variant='h3'>Seattle News</Typography>
            <News stories={stories}/>
        </Stack>
    )
}

export {Localnews, LocalnewsLoader}