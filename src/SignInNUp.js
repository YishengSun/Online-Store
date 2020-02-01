import React, { Component } from 'react';
import "./SignInNUp.scss";
import SignIn from "./SignIn";
import SignUp from "./SignUp"

export default class SignInNUp extends Component {
    render() {
        return (
            <div className="SignInNUp">
                <SignIn />
                <SignUp />
            </div>
        )
    }
}

