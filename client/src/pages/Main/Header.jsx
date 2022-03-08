import React from "react";
import { Paper, makeStyles, Container, Grid, Typography, Box, Button } from "@material-ui/core";


const useStyles = makeStyles({
    section: {
        height: '95vh',
        backgroundImage: 'url(https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/xd_microsite/undraw_design_thinking_xd.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // marginLeft: 80,
    },
    content: {
        height: '100%',
    },
    container: {
        height: '100%'
    }
})

export default function Header() {
    const styles = useStyles()
    return (
        <div data-aos="fade-in" data-aos-duration='5000'>
            <Paper className={styles.section}>
                <Container className={styles.container} maxWidth='md'>
                    <Grid className={styles.content} container justifyContent="space-between" alignItems='center'>
                        <Grid item sm={8}>
                            <Typography variant='h2' component='h1' color='secondary'>Review LT</Typography>
                            <Typography component='h1' variant="h5">Share your opinion with everyone!</Typography>
                            <Box my={2}>
                                <Button href='/reviews' variant='outlined' color='secondary'>Get Started</Button>
                            </Box>
                            <Grid item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </div>
    )
}