import React from 'react'
import { Stack, Typography, Link, Box } from '@mui/material'

const News = ({stories}) => {
  return (
    <Stack py={3} spacing={5}>
        {stories.map((story, index) => (
            <Stack key={index} spacing={2} color='black' p={2}>
                <Typography variant="subtitle1" component="div">
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