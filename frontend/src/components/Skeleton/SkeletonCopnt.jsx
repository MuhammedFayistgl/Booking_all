import { Box, Skeleton } from '@mui/material'
import React from 'react'

const SkeletonCopnt = () => {
  return (
    <>
       <Box sx={{ display: "flex", gap: 2 }}>
          <Skeleton height={200} width={170} />
          <Box width={200}>
            <Skeleton height={30} width="100%" />
            <Skeleton height={20} width="60%" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
            width={200}
          >
            <Box>
              <Skeleton height={20} width="100%" />
              <Skeleton height={20} width="100%" />
              <Skeleton height={20} width="100%" />
            </Box>

            <Box>
              <Skeleton height={20} width="100%" />
            </Box>
          </Box>
        </Box>
    </>
  )
}

export default SkeletonCopnt
