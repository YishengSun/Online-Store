import React, { Component } from "react";
import FormInput from "./FormInput";
import CustomBtn from "./CustomBtn";
import { auth, createuserProfileDoc } from "./Firebase/Firebase";
import "./SignUp.scss";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password doesn't match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );     // 创建user，会自动生成uid
      await createuserProfileDoc(user, { displayName });  //user存入数据库

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      alert("Sign up successfully!")
    } catch (error) {
      alert(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="SignUp">
        <h2 className="SignUp-title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="SignUp-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomBtn type="submit">Sign Up</CustomBtn>
        </form>
      </div>
    );
  }
}
