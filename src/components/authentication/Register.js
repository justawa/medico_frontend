import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions';
import { Spinner } from 'reactstrap';
import AuthLayout from '../common/layouts/auth/AuthLayout';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    c_password: '',
    isLoading: false,
  };

  handleSubmit = (e) => {
    const { name, email, password, c_password } = this.state;
    const { from } = this.props.location.state || {
      from: { pathname: `${process.env.PUBLIC_URL}/dashboard` },
    };
    this.setState({ isLoading: true });
    this.props.registerUser(
      { name, email, password, c_password },
      () => this.props.history.push(from),
      () => this.setState({ isLoading: false })
    );
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  showErrors = () => {
    const { error } = this.props;

    // return error && error.map((err) => <li>{err}</li>);
    if (typeof error === 'object') {
      for (const err in error) {
        return <div>{error[err]}</div>;
      }
    }
    return error;
  };

  render() {
    const { name, email, password, c_password, isLoading } = this.state;
    return (
      <AuthLayout onSubmit={this.handleSubmit}>
        <div className='login p-4'>
          <label htmlFor='inputName' className='sr-only'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='inputName'
            className='form-control'
            placeholder='Name'
            value={name}
            onChange={this.handleChange}
            required
            autoFocus
          />
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
          <label htmlFor='inputCPassword' className='sr-only'>
            Confirm Password
          </label>
          <input
            type='password'
            name='c_password'
            id='inputCPassword'
            className='form-control'
            placeholder='Confirm Password'
            value={c_password}
            onChange={this.handleChange}
            required
          />
          {/* <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div> */}
          <div className='text-center'>
            <button className='btn-sign' type='submit'>
              {isLoading ? <Spinner size='sm' color='light' /> : 'Sign up'}
            </button>
          </div>
          <p style={{ color: 'red', textAlign: 'center' }}>
            {this.showErrors()}
          </p>
          <Link
            to={`${process.env.PUBLIC_URL}/login`}
            className='d-block text-center text-light'
          >
            Already have an account? Login here
          </Link>
        </div>
      </AuthLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return { error: state.auth.errorMessage };
};

export default connect(mapStateToProps, { registerUser })(Register);
