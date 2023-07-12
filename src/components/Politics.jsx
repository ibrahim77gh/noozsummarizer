import React from 'react'
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import News from './News'
import { Typography, Stack, CircularProgress, Box } from '@mui/material';

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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(false)
    }, [stories])
  return (
    <>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <CircularProgress size={100} />
        </Box>
      ) : (
        <Stack mt={7}>
          <Typography variant='h3'>Seattle Politics</Typography>
          <News stories={stories}/>
        </Stack>
      )}
      
    </>
    
  )
}

export {Politics, PoliticsLoader}