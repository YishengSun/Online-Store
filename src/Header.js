import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Assets/crown.svg";
import "./Header.scss";
import { auth } from "./Firebase/Firebase";
import { connect } from "react-redux";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "./Redux/cart/cart-selector";
import { selectCurrentUser } from "./Redux/user/user-selector";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link className="Header-logo-container" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="Header-options">
          <Link className="Header-option" to="/shop">
            SHOP
          </Link>
          <Link className="Header-option" to="/">
            CONTACT
          </Link>
          {this.props.currentUser ? (
            <div className="Header-option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="Header-option" to="/sign">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {!this.props.hidden && <CartDropdown />}
      </div>
    );
  }
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStatetoProps)(Header); //可以删除app对于props的传入了，因为接收了redux中存储的
