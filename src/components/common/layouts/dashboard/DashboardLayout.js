import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Sidebar from '../../../sidebar/Sidebar';
import { isAuthenticated } from '../../../helpers/methods';
import DropdownMenu from '../../custom/DropdownMenu/DropdownMenu';

function DashboardLayout({ children, history }) {
  useEffect(() => {
    if (!isAuthenticated()) {
      history.push('/login');
    }
  }, [history]);
  return (
    <div className='dash-top-bg'>
      <Sidebar />
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              {/* <nav id='dashboard_main' className='mobile-dashboard'>
                <div className='dashboard-header'>
                  <Link className='btn-close float-right'>
                    {' '}
                    <i className='fa fa-times'></i>{' '}
                  </Link>
                </div>
                <div className='student_info'>
                  <DropdownMenu />
                </div>
                <ul className='navbar-nav'>
                  <li className='nav-item active'>
                    {' '}
                    <Link
                      className='nav-link'
                      to={`${process.env.PUBLIC_URL}/dashboard`}
                    >
                      Dashboard{' '}
                    </Link>{' '}
                  </li>
                  <li className='nav-item'>
                    <Link
                      className='nav-link'
                      to={`${process.env.PUBLIC_URL}/about`}
                    >
                      {' '}
                      About{' '}
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className='nav-link'
                      to={`${process.env.PUBLIC_URL}/services`}
                    >
                      {' '}
                      Services{' '}
                    </Link>
                  </li>
                  <li className='nav-item dropdown'>
                    <Link
                      className='nav-link  dropdown-toggle'
                      to={`${process.env.PUBLIC_URL}/services`}
                      data-toggle='dropdown'
                    >
                      {' '}
                      More items{' '}
                    </Link>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link
                          className='dropdown-item'
                          to={`${process.env.PUBLIC_URL}`}
                        >
                          {' '}
                          Submenu item 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item'
                          to={`${process.env.PUBLIC_URL}`}
                        >
                          {' '}
                          Submenu item 2{' '}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav> */}
              <img
                src={`${process.env.PUBLIC_URL}/images/medco-logo1.png`}
                alt='logo'
              />
              <div className='dash-b pt-4'>
                {/* <span className='notification'>
                  <i className='fa fa-bell-o' aria-hidden='true'></i>
                </span> */}
                {/* <a href='/' className='name-ico' data-toggle='dropdown'>
                  R
                </a>
                <div className='dropdown-menu'>
                  <a className='dropdown-item' href='/'>
                    Link 1
                  </a>
                  <a className='dropdown-item' href='/'>
                    Link 2
                  </a>
                  <a className='dropdown-item' href='/'>
                    Link 3
                  </a>
                </div> */}
                <DropdownMenu />
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

export default withRouter(DashboardLayout);
