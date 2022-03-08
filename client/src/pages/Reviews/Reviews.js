import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from '@material-ui/core'
import { useDispatch } from "react-redux";
import { AppBar } from "@material-ui/core";


import { getPosts } from '../../actions/posts'
import Posts from '../../components/Posts/Posts'
import Form from '../../components/Form/Form'
import useStyles from '../../styles'

const Reviews = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify='space-between' alignItems='strech' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default Reviews;