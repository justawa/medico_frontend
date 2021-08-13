import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import { Spinner } from 'reactstrap';
import AuthLayout from '../common/layouts/auth/AuthLayout';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
  };

  handleSubmit = () => {
    const { email, password } = this.state;

    const { location } = this.props;
    const redirect = location.search
      ? location.search.split('=')[1]
      : 'dashboard';
    this.setState({ isLoading: true });
    this.props.loginUser(
      { email, password },
      () => this.props.history.push(`${process.env.PUBLIC_URL}/${redirect}`),
      () => this.setState({ isLoading: false })
    );
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { email, password, isLoading } = this.state;
    return (
      <AuthLayout onSubmit={this.handleSubmit}>
        <div className='login p-4'>
          <label htmlFor='inputEmail' className='sr-only'>
            Email address
          </label>
          <input
            type='email'
            name='email'
            id='inputEmail'
            className='form-control'
            placeholder='Email address'
            value={email}
            onChange={this.handleChange}
            required
            autoFocus
          />
          <label htmlFor='inputPassword' className='sr-only'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='inputPassword'
            className='form-control'
            placeholder='Password'
            value={password}
            onChange={this.handleChange}
            required
          />
          {/* <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div> */}
          <div className='text-center'>
            <button className='btn-sign' type='submit' disabled={isLoading}>
              {isLoading ? <Spinner size='sm' color='light' /> : 'Sign in'}
            </button>
          </div>
          <p style={{ color: 'red', textAlign: 'center' }}>
            {this.props.error}
          </p>
          <Link
            to={`${process.env.PUBLIC_URL}/register`}
            className='d-block text-center text-light'
          >
            Don't have an account? Register here
          </Link>
        </div>
      </AuthLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return { error: state.auth.errorMessage };
};

export default connect(mapStateToProps, { loginUser })(Login);
