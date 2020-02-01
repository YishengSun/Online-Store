import React, { Component } from "react";
import FormInput from "./FormInput";
import CustomBtn from "./CustomBtn";
import { auth, signInWithGoogle } from "./Firebase/Firebase";
import "./SignIn.scss";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      alert("success!")
    } catch (error) {
      alert(error);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="SignIn">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="SignIn-btns">
            <CustomBtn type="submit">Sign In</CustomBtn>
            <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with google
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}
