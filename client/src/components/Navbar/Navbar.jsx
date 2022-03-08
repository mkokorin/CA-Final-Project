import React, { useState, useEffect } from "react";
import { Avatar, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import AppBar from "@material-ui/core/AppBar";
import ToolBar from '@material-ui/core/ToolBar'
import Container from "@material-ui/core/Container";
import Hidden from '@material-ui/core/Hidden'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/core/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import List from '@material-ui/core/List'
import { ListItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode'
import { Box } from "@material-ui/core";


const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Reviews', href: '/Reviews' },
  { name: 'Contacts', href: '' },
]

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  }
}));

export default function Navbar() {
  const styles = useStyles()
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' })

    navigate('/')

    setUser(null)
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token)

      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  return (
    <AppBar position='sticky' color='default' >
      <Container maxWidth='md' sx={{ justifyContent: 'flex-end' }}>
        <ToolBar disableGutters>
          <Hidden xsDown>
            {navigationLinks.map((item) => (
              <Link
                className={styles.link}
                color='textPrimary'
                variant='button'
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <div>
                {/* <Avatar className={styles.image} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar> */}
                <Typography className={styles.userName} variant='h6'>{user.result.name}</Typography>
                <Button variant='contained' color='secondary' onClick={logout}>Logout</Button>
              </div>
            ) : (
              <Button href='/auth' variant='contained' color='primary'>Sign In</Button>
            )}
          </Hidden>
          <Hidden smUp>
            <IconButton>
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Hidden>
        </ToolBar>
      </Container>
      <SwipeableDrawer
        anchor='right'
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div>
          <IconButton>
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem>
              <Link
                className={styles.link}
                color='textPrimary'
                variant='button'
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
          {user ? (
            <div>
              <Typography className={styles.userName} variant='h6'>{user.result.name}</Typography>
              <Button variant='contained' color='secondary' onClick={logout}>Logout</Button>
            </div>
          ) : (
            <Button href='/auth' variant='contained' color='primary'>Sign In</Button>
          )}
        </List>
      </SwipeableDrawer>
    </AppBar>
  )
}