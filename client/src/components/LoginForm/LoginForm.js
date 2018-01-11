import React from 'react';
import PropTypes from 'prop-types';
import "./loginForm.css";
import { Link } from 'react-router-dom';
import setAuthorizationToken from '../../utils/setAuthorizationToken';
import axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      emailAddress: '',
      password: '',
    }
  }

   

      
  

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  setAuthorizationToken(token) {
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }
  
  onSubmit(e) {
    e.preventDefault();
    this.props.userLoginRequest(this.state);
    fetch('/api/users/returninguser')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      sessionStorage.setItem("accessToken", data.accessToken);
      const activeAccessToken = sessionStorage.getItem("accessToken");
      setAuthorizationToken(activeAccessToken);
    });
  }

  render() {
    return (
      <form className="form-signin" onSubmit={this.onSubmit.bind(this)}>
        <h2 className="form-signin-heading" id="plsSgnIn">Please sign in</h2>
        
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input name="emailAddress" value={this.state.emailAddress} onChange={this.onChange.bind(this)} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
        
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input name="password" value={this.state.password} onChange={this.onChange.bind(this)} type="password" id="inputPassword" className="form-control" placeholder="Password" required />

        <button className="btn btn-lg btn-primary btn-block signIn" type="submit">Sign In</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired
};

export default LoginForm