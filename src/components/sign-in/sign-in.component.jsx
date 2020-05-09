import React, { Component } from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="text"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />

          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button className="google-sign-in" onClick={signInWithGoogle}>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
