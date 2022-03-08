import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import useStyles from '../Form/styles'
import { createPost, updatePost } from '../../actions/posts'

export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' })
  const post = useSelector((state) => currentId ? state.posts.find((message) => message._id = currentId) : null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post])

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }))
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  }

  if (!user?.result?.name) {
    return (
      <Paper>
        <Typography variant='h6' align='center'>
          Sign In to create a review.
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} a Review</Typography>
        <TextField name='title' variant='outlined' label='Product' fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name='message' variant='outlined' label='Review' fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple='false' onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant='outlined' color='primary' size='large' type='submit' fullWidth>Submit</Button>
        <Button variant='contained' color='primary' size='small' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}
