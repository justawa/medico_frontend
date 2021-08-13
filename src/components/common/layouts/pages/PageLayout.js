import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../sidebar/Sidebar';
import { isAuthenticated } from '../../../helpers/methods';
import DropdownMenu from '../../custom/DropdownMenu/DropdownMenu';

class PageLayout extends React.Component {
  authLinks() {
    if (isAuthenticated()) {
      return <DropdownMenu />;
    }

    return (
      <>
        <Link to={`${process.env.PUBLIC_URL}/login`} className='login-btn'>
          <i className='fa fa-user' aria-hidden='true'></i> LOGIN
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/register`} className='signin-btn'>
          <i className='fa fa-user-plus' aria-hidden='true'></i> SIGN UP
        </Link>
      </>
    );
  }

  render() {
    return (
      <div className='top-bg'>
        <Sidebar />
        <header>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <img alt='' src='images/medco-logo1.png' />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 text-right'>
                {this.authLinks()}
              </div>
            </div>
          </div>
        </header>
        {this.props.children}
        <footer className='sec-b'>
          <div className='container'>
            <div className='row pb-5'>
              <div className='col-lg-12 col-md-12 col-sm-12 text-center'>
                <p>
                  {' '}
                  <img
                    alt=''
                    className='img-fluid'
                    src='images/medco-logo.png'
                  />
                </p>
                <div className='pt-3 '>
                  <img alt='' src='images/google-play.png' />{' '}
                  <img alt='' src='images/google-apple.png' />
                </div>
                <h4 className='pt-5 text-capitalize'>
                  <b>Start Preparation With Our</b> Test Series And Score More
                </h4>
                <button className='blue-btn'>Start Test</button>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                Privacy | Faq | Terms and Condition
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 text-lg-right'>
                <a className='pr-2 pl-2' href='/'>
                  <i className='fa fa-facebook' aria-hidden='true'></i>
                </a>
                <a className='pr-2 pl-2' href='/'>
                  <i className='fa fa-twitter' aria-hidden='true'></i>
                </a>
                <a className='pr-2 pl-2' href='/'>
                  <i className='fa fa-linkedin' aria-hidden='true'></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className='whatsapp1'>
          <i className='fa fa-calendar' aria-hidden='true'></i>
        </div>
        <div className='whatsapp2'>
          <i className='fa fa-comment' aria-hidden='true'></i>
        </div>
        <div className='whatsapp'>
          <i className='fa fa-whatsapp' aria-hidden='true'></i>
        </div>
      </div>
    );
  }
}

export default PageLayout;
