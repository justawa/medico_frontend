import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated } from '../../../helpers/methods';

function AuthLayout({ children, onSubmit, history, location }) {
  const redirect = location.search
    ? location.search.split('=')[1]
    : 'dashboard';

  useEffect(() => {
    if (isAuthenticated()) {
      history.push(`${process.env.PUBLIC_URL}/${redirect}`);
    }
  }, [history, redirect]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <div className='layout-body'>
      <div className='auth-bb'>
        <form onSubmit={handleSubmit} className='form-signin'>
          <div className='p-5 text-center'>
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <img
                className='img-fluid'
                src='./images/medco-logo.png'
                alt='logo'
                width='200px'
              />
            </Link>
          </div>
          {children}
        </form>
      </div>
    </div>
  );
}

export default withRouter(AuthLayout);
