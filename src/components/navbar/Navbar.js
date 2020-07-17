import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import style from '../CSS/Navbar.module.css';
import { Link } from '@material-ui/core';
export const Navbar = () => {
    return (
        <div className={style.root}>
        <AppBar position="static" className={style.appbar}>
          <Toolbar>
            <IconButton edge="start" className={style.menuButton} color="inherit" aria-label="menu">
             C A M O
            </IconButton>
            <Typography variant="h6" className={style.title}>
              <Link className={style.link} to="/">Home</Link>{"  "}
              <Link className={style.link} to="product">Product</Link>
            </Typography>
            <Link className={style.link} to="cart">
              Login
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
}
export default Navbar;
