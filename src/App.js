import React from "react";
import "./App.css";
import Header from "./Header";
import HomePage from "./HomePage";
import SignInNUp from "./SignInNUp";
import Checkout from "./Checkout";

import { auth, createuserProfileDoc } from "./Firebase/Firebase";
import Shop from "./Shop";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/user/user-action";
import { selectCurrentUser } from "./Redux/user/user-selector";



class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //监听user的sign状态 in or out
      if (userAuth) {
        const userRef = await createuserProfileDoc(userAuth); // 创建这个user如果不存在(比如google登陆)，并获得数据库中这个user的ref
        userRef.onSnapshot(snapShot => {
          // 通过这个user的ref找到他的信息并修改当前的curUUsser
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInNUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);
