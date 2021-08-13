import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './helpers/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Help from './pages/Help';
import Cart from './pages/Cart';
import Support from './pages/Support';
// import Slider from './pages/Slider';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Dashboard from './dashboard/Dashboard';
import Logout from './authentication/Logout';
import PackageList from './student/PackageList';
import TestList from './student/TestList';
import TestScreen from './student/TestScreen';
import TestResult from './student/TestResult';

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/courses`}
            component={Courses}
          />
           {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/Slider`}
            component={Slider}
          /> */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/services`}
            component={Services}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/help`}
            component={Help}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/support`}
            component={Support}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={Login}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/register`}
            component={Register}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/logout`}
            component={Logout}
          />
          <PrivateRoute
            exact
            path={`${process.env.PUBLIC_URL}/cart`}
            component={Cart}
          />
          <PrivateRoute
            exact
            path={`${process.env.PUBLIC_URL}/dashboard`}
            component={Dashboard}
          />
          <PrivateRoute
            exact
            path={`${process.env.PUBLIC_URL}/my-packages`}
            component={PackageList}
          />
          <PrivateRoute
            exact
            path={`${process.env.PUBLIC_URL}/my-packages/:id/tests`}
            component={TestList}
          />
          <PrivateRoute
            exact
            path={`${process.env.PUBLIC_URL}/test/:id/mode/:type`}
            component={TestScreen}
          />
          <PrivateRoute
            exact
            path={`${process.env.PUBLIC_URL}/test/:id/result`}
            component={TestResult}
          />
          <Route />
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
