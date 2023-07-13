import React from 'react'
import { Stack, Typography, Link, Box } from '@mui/material'

const News = ({stories}) => {
  return (
    <Stack py={3} spacing={5}>
        {stories.map((story, index) => (
            <Stack justifyContent='center' alignItems='center' key={index} spacing={2} color='black' p={2}>
                <Typography variant="subtitle1" width={{xs:'350px', sm:'350px', lg:'100%'}} component="div">
                    <Link href={story.url} target="_blank" rel="noopener">
                        {story.url}
                    </Link>
                </Typography>
                <Typography variant="body1" component="div">
                    {story.content}
                </Typography>
            </Stack>
      ))}
      </Stack>
  )
}

export default News