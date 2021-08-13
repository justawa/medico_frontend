import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PageLayout from '../common/layouts/pages/PageLayout';
import { addItemToCart, getUserPackages } from '../../actions';

function Services({ history }) {
  const dispatch = useDispatch();

  const { authenticated } = useSelector((state) => state.auth);
  const { token, user } = authenticated;

  const { packages } = useSelector((state) => state.userPackages);

  useEffect(() => {
    if (user) {
      dispatch(getUserPackages(token, user.id));
    }
  }, [dispatch, token, user]);

  function addToCart(id) {
    if (token) {
      dispatch(addItemToCart(token, id));
      history.push(`${process.env.PUBLIC_URL}/cart`);
    } else {
      history.push(`${process.env.PUBLIC_URL}/login?redirect=courses`);
    }
  }

  return (
    <PageLayout>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='course-table'>
              <h3 className='course-title'>Merged</h3>
              <ul className='table-list'>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <span className='full_plane_btn'>
                    <button
                      style={{
                        backgroundColor: 'inherit',
                        color: 'inherit',
                        border: 'none',
                      }}
                      onClick={() => addToCart(1)}
                      disabled={
                        packages.length > 0
                          ? packages.find((p) => p.id === 1)
                          : false
                      }
                    >
                      Buy Package 1
                    </button>
                  </span>
                </li>
              </ul>
            </div>
            <div className='course-table'>
              <h3 className='course-title'>Solitary NEET PG </h3>
              <ul className='table-list'>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <span className='full_plane_btn'>
                    <button
                      style={{
                        backgroundColor: 'inherit',
                        color: 'inherit',
                        border: 'none',
                      }}
                      onClick={() => addToCart(2)}
                      disabled={
                        packages.length > 0
                          ? packages.find((p) => p.id === 2)
                          : false
                      }
                    >
                      Buy Package 2
                    </button>
                  </span>
                </li>
              </ul>
            </div>
            <div className='course-table'>
              <h3 className='course-title'>NEET DM</h3>
              <ul className='table-list'>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <span className='full_plane_btn'>
                    <button
                      style={{
                        backgroundColor: 'inherit',
                        color: 'inherit',
                        border: 'none',
                      }}
                      onClick={() => addToCart(3)}
                      disabled={
                        packages.length > 0
                          ? packages.find((p) => p.id === 3)
                          : false
                      }
                    >
                      Buy Package 3
                    </button>
                  </span>
                </li>
              </ul>
            </div>
            <div className='course-table'>
              <h3 className='course-title'>NEET MCH</h3>
              <ul className='table-list'>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <p>Name</p>
                  <Link to='/'>
                    <span className='plane_btn'>View Plan</span>
                  </Link>
                </li>
                <li>
                  <span className='full_plane_btn'>
                    <button
                      style={{
                        backgroundColor: 'inherit',
                        color: 'inherit',
                        border: 'none',
                      }}
                      onClick={() => addToCart(4)}
                      disabled={
                        packages.length > 0
                          ? packages.find((p) => p.id === 4)
                          : false
                      }
                    >
                      Buy Package 4
                    </button>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 pt-3 pb-3 text-center'>
            <button
              className='blue-btn'
              data-toggle='modal'
              data-target='#exampleModalLong'
            >
              View All Packges
            </button>{' '}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Services;
