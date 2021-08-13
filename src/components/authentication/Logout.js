import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser(null, () =>
      this.props.history.push(`${process.env.PUBLIC_URL}`)
    );
  }
  render() {
    return <div>Logging out...</div>;
  }
}

export default connect(null, { logoutUser })(Logout);
