import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPackages } from '../../actions';
import DashboardLayout from '../common/layouts/dashboard/DashboardLayout';
import TestList from '../student/TestList';
import LottiesLoader from '../common/custom/Loader/LottiesLoader';
// import DoughnutChart from '../common/custom/Charts/DoughnutChart';

function Dashboard() {
  const dispatch = useDispatch();

  const { authenticated } = useSelector((state) => state.auth);
  const { token, user } = authenticated;
  const { packages, loading } = useSelector((state) => state.userPackages);

  useEffect(() => {
    dispatch(getUserPackages(token, user.id));
  }, [dispatch, token, user]);

  return (
    <DashboardLayout>
      <section className='secc'>
        <div className='container'>
          <div id='demo' className='carousel slide' data-ride='carousel'>
            <ul className='carousel-indicators'>
              <li data-target='#demo' data-slide-to='0' className='active'></li>
              <li data-target='#demo' data-slide-to='1'></li>
              <li data-target='#demo' data-slide-to='2'></li>
            </ul>

            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <div className='row'>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='dash-achiv p-3'>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <p className='mb-1 small-text'>
                            <i className='fa fa-clock-o' aria-hidden='true'></i>{' '}
                            10-11-20 <span>10:30PM</span>
                          </p>
                          <h4>
                            <b>Antomy</b>
                          </h4>
                        </div>
                        <div className='col-lg-4'>
                          <img
                            className='dash-img'
                            src='images/achiver.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <p className='small-text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='dash-achiv p-3'>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <p className='mb-1 small-text'>
                            <i className='fa fa-clock-o' aria-hidden='true'></i>{' '}
                            10-11-20 <span>10:30PM</span>
                          </p>
                          <h4>
                            <b>Antomy</b>
                          </h4>
                        </div>
                        <div className='col-lg-4'>
                          <img
                            className='dash-img'
                            src='images/achiver.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <p className='small-text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='dash-achiv p-3'>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <p className='mb-1 small-text'>
                            <i className='fa fa-clock-o' aria-hidden='true'></i>{' '}
                            10-11-20 <span>10:30PM</span>
                          </p>
                          <h4>
                            <b>Antomy</b>
                          </h4>
                        </div>
                        <div className='col-lg-4'>
                          <img
                            className='dash-img'
                            src='images/achiver.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <p className='small-text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item '>
                <div className='row'>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='dash-achiv p-3'>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <p className='mb-1 small-text'>
                            <i className='fa fa-clock-o' aria-hidden='true'></i>{' '}
                            10-11-20 <span>10:30PM</span>
                          </p>
                          <h4>
                            <b>Antomy</b>
                          </h4>
                        </div>
                        <div className='col-lg-4'>
                          <img
                            className='dash-img'
                            src='images/achiver.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <p className='small-text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='dash-achiv p-3'>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <p className='mb-1 small-text'>
                            <i className='fa fa-clock-o' aria-hidden='true'></i>{' '}
                            10-11-20 <span>10:30PM</span>
                          </p>
                          <h4>
                            <b>Antomy</b>
                          </h4>
                        </div>
                        <div className='col-lg-4'>
                          <img
                            className='dash-img'
                            src='images/achiver.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <p className='small-text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='dash-achiv p-3'>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <p className='mb-1 small-text'>
                            <i className='fa fa-clock-o' aria-hidden='true'></i>{' '}
                            10-11-20 <span>10:30PM</span>
                          </p>
                          <h4>
                            <b>Antomy</b>
                          </h4>
                        </div>
                        <div className='col-lg-4'>
                          <img
                            className='dash-img'
                            src='images/achiver.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <p className='small-text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='carousel-item'>
                <div className='row'>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='dash-achiv p-3'>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <p className='mb-1 small-text'>
                            <i className='fa fa-clock-o' aria-hidden='true'></i>{' '}
                            10-11-20 <span>10:30PM</span>
                          </p>
                          <h4>
                            <b>Antomy</b>
                          </h4>
                        </div>
                        <div className='col-lg-4'>
                          <img
                            className='dash-img'
                            src='images/achiver.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <p className='small-text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='dash-achiv p-3'>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <p className='mb-1 small-text'>
                            <i className='fa fa-clock-o' aria-hidden='true'></i>{' '}
                            10-11-20 <span>10:30PM</span>
                          </p>
                          <h4>
                            <b>Antomy</b>
                          </h4>
                        </div>
                        <div className='col-lg-4'>
                          <img
                            className='dash-img'
                            src='images/achiver.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <p className='small-text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='dash-achiv p-3'>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <p className='mb-1 small-text'>
                            <i className='fa fa-clock-o' aria-hidden='true'></i>{' '}
                            10-11-20 <span>10:30PM</span>
                          </p>
                          <h4>
                            <b>Antomy</b>
                          </h4>
                        </div>
                        <div className='col-lg-4'>
                          <img
                            className='dash-img'
                            src='images/achiver.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <p className='small-text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row pt-5 pb-5'>
            <div className='col-lg-3 col-md-3 col-sm-12'>
              <div className='span12'>
                <table className='table-condensed calendar table-striped'>
                  <thead>
                    <tr>
                      <th colSpan='7'>
                        <span className='btn-group'>
                          <Link className='btn' to=''>
                            <i className='icon-chevron-left'></i>
                          </Link>
                          <Link className='btn active' to=''>
                            February 2021
                          </Link>
                          <Link className='btn' to=''>
                            <i className='icon-chevron-right'></i>
                          </Link>
                        </span>
                      </th>
                    </tr>
                    <tr className='table-bordered'>
                      <th>Su</th>
                      <th>Mo</th>
                      <th>Tu</th>
                      <th>We</th>
                      <th>Th</th>
                      <th>Fr</th>
                      <th>Sa</th>
                    </tr>
                  </thead>
                  <tbody className='table-bordered'>
                    <tr>
                      <td className='muted'>29</td>
                      <td className='muted'>30</td>
                      <td className='muted'>31</td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td className='btn-primary'>
                        <strong>20</strong>
                      </td>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                      <td className='muted'>1</td>
                      <td className='muted'>2</td>
                      <td className='muted'>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='span12'>
                <h4>
                  <b>Event &amp; News</b>
                </h4>
                <hr />
                <div className='row'>
                  <ul>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-12'>
              <div className='span12'>
                <div className='row'>
                  <div className='col-lg-8 col-md-8 col-sm-12'>
                    <h4>
                      <b>Self Assessment</b>
                    </h4>
                    <p>Test Series</p>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12 text-right'>
                    <Link
                      to=''
                      className='dropdown-toggle today'
                      data-toggle='dropdown'
                    >
                      Today
                    </Link>
                    <div className='dropdown-menu'>
                      <Link className='dropdown-item' to=''>
                        Link 1
                      </Link>
                      <Link className='dropdown-item' to=''>
                        Link 2
                      </Link>
                      <Link className='dropdown-item' to=''>
                        Link 3
                      </Link>
                    </div>
                  </div>
                </div>
                <hr />
                {loading ? (
                  <LottiesLoader />
                ) : (
                  packages.map((packAge) => (
                    <div key={packAge.id}>
                      <div className='row'>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                          <p className='mb-1'>{packAge.name}</p>
                          {/* <p>300 Q's 210m</p> */}
                          <TestList id={packAge.id} type='preparation' />
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 text-right'>
                          <img
                            className='dash-logo-icon'
                            src='images/achiver.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))
                )}
                <div className='row'>
                  <div className='col-lg-12 text-right'>
                    <Link to=''>See All</Link>
                  </div>
                </div>
              </div>
              <div className='span12'>
                <div className='row'>
                  <div className='col-lg-8 col-md-8 col-sm-12'>
                    <h4>
                      <b>Practice Pool</b>
                    </h4>
                    <p>Your Progess</p>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12 text-right'>
                    <div className='icons-width'>
                      <img
                        className='img-fluid'
                        src='images/icon-book.png'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
                <hr />
                {loading ? (
                  <LottiesLoader />
                ) : (
                  packages.map((packAge) => (
                    <div key={packAge.id}>
                      <div className='row'>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                          <p className='mb-1'>{packAge.name}</p>
                          {/* <p>300 Q's 210m</p> */}
                          <TestList id={packAge.id} type='mock' />
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 text-right'>
                          <img
                            className='dash-logo-icon'
                            src='images/achiver.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))
                )}
                <div className='row'>
                  <div className='col-lg-12 text-right'>
                    <Link to=''>See All</Link>
                  </div>
                </div>
              </div>
              <div className='span12'>
                <div className='row'>
                  <div className='col-lg-8 col-md-8 col-sm-12'>
                    <h4>
                      <b>Grand Pool</b>
                    </h4>
                    <p>Your Progess</p>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-12 text-right'>
                    <div className='icons-width'>
                      <img
                        className='img-fluid'
                        src='images/icon-book.png'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
                <hr />
                {loading ? (
                  <LottiesLoader />
                ) : (
                  packages.map((packAge) => (
                    <div key={packAge.id}>
                      <div className='row'>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                          <p className='mb-1'>{packAge.name}</p>
                          {/* <p>300 Q's 210m</p> */}
                          <TestList id={packAge.id} type='grand' />
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 text-right'>
                          <img
                            className='dash-logo-icon'
                            src='images/achiver.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))
                )}
                <div className='row'>
                  <div className='col-lg-12 text-right'>
                    <Link to=''>See All</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div className='span12'>
                <div
                  className='chartjs-size-monitor'
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    visibility: 'hidden',
                    zIndex: '-1',
                  }}
                >
                  <div
                    className='chartjs-size-monitor-expand'
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '0',
                      right: '0',
                      bottom: '0',
                      overflow: 'hidden',
                      pointerEvents: 'none',
                      visibility: 'hidden',
                      zIndex: '-1',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        width: '1000000px',
                        height: '1000000px',
                        left: 0,
                        top: 0,
                      }}
                    ></div>
                  </div>
                  <div
                    className='chartjs-size-monitor-shrink'
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      overflow: 'hidden',
                      pointerEvents: 'none',
                      visibility: 'hidden',
                      zIndex: '-1',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        width: '200%',
                        height: '200%',
                        left: 0,
                        top: 0,
                      }}
                    ></div>
                  </div>
                </div>
                <canvas
                  id='chart-line'
                  width='100%'
                  height='200'
                  className='chartjs-render-monitor'
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '200px',
                  }}
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
