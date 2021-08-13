import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../helpers/methods';

function Sidebar() {
  function authUrls() {
    if (isAuthenticated()) {
      return (
        <Link className='menu-item' to={`${process.env.PUBLIC_URL}/logout`}>
          Logout
        </Link>
      );
    }

    return (
      <>
        <Link
          className='menu-item login-btn'
          to={`${process.env.PUBLIC_URL}/login`}
          style={{
            fontSize: 12,
            display: 'inline-block',
            margin: 0,
            marginRight: 2,
          }}
        >
          Login
        </Link>
        <Link
          className='menu-item signin-btn'
          to={`${process.env.PUBLIC_URL}/register`}
          style={{
            fontSize: 12,
            display: 'inline-block',
            margin: 0,
            marginLeft: 2,
          }}
        >
          Register
        </Link>
      </>
    );
  }

  return (
    <Menu>

      <Link className='menu-item' to={`${process.env.PUBLIC_URL}/`}> Home </Link>

      <Link className='menu-item' to={`${process.env.PUBLIC_URL}/courses`}> Courses </Link>
      <Link className='menu-item' to={`${process.env.PUBLIC_URL}/services`}> Services </Link>
      <Link className='menu-item' to={`${process.env.PUBLIC_URL}/about`}> About </Link>
      <Link className='menu-item' to={`${process.env.PUBLIC_URL}/help`}> Need Help? </Link>
     
      {authUrls()}
    </Menu>
  );
}

export default Sidebar;
