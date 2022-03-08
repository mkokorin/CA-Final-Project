import React from 'react'
import { Box, Container, Grid, Typography, Link } from '@material-ui/core'


export default function Footer() {
    return (
        <Box px={{ xs: 3, sm: 10 }} py={{ xs: 10, sm: 10 }} bgcolor='gray' color='white'>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item sx={12} sm={4}>
                        <Box borderBottom={2}>
                            <Typography variant='h5'>Help</Typography>
                        </Box>
                        <Box sx={{ my: 1 }}>
                            <Link href='/' color='inherit' underline='none' variant='h6'>Lorem</Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit' underline='none' variant='h6'>Lorem</Link>
                        </Box>
                    </Grid>
                    <Grid item sx={12} sm={4}>
                        <Box borderBottom={2}>
                            <Typography variant='h5'>Info</Typography>
                        </Box>
                        <Box sx={{ my: 1 }}>
                            <Link href='/' color='inherit' underline='none' variant='h6'>Lorem</Link>
                        </Box>
                    </Grid>
                    <Grid item sx={12} sm={4}>
                        <Box borderBottom={2}>
                            <Typography variant='h5'>Review</Typography>
                        </Box>
                        <Box sx={{ my: 1 }}>
                            <Link href='/create' color='inherit' underline='none' variant='h6'>Create Review</Link>
                        </Box>
                        <Box>
                            <Link href='/reviews' color='inherit' underline='none' variant='h6'>Read Review</Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign='center' pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 10 }}>
                    <Typography variant='h5'>ReviewLT &reg; {new Date().getFullYear()}</Typography>
                </Box>
            </Container>
        </Box>
    )
}
