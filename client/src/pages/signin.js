import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from './signup';
//import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../components/Firebase';
import * as ROUTES from '../constants/routes';

/*===============================================================================*/
//This page is grabbing css styles from the globalStyles.css in the public folder
/*===============================================================================*/

const SignInPage = () => (
  <div className="ks-container signin-grid">
    <h1 className="signin-header">SignIn</h1>
    <SignInForm />
    {/*     <PasswordForgetLink /> */}
    <SignUpLink/>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};


class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (

      <form onSubmit={this.onSubmit} className="">
        <input className="signin-input"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input className="signin-input"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit" className="signin-button">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }

}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };