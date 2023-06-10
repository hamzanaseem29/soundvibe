"use client"

import { Box } from '@chakra-ui/react'
import React from 'react'
import { BounceLoader } from 'react-spinners'

const loading = () => {
  return (
    <Box className='h-full flex items-center justify-center'>
        <BounceLoader color='#D7263D' size={40} />
    </Box>
  )
}

export default loading