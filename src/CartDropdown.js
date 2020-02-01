import React from "react";
import CustomBtn from "./CustomBtn";
import "./CartDropdown.scss";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "./Redux/cart/cart-selector";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "./Redux/cart/cart-action";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="CartDropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>

    <CustomBtn
      onClick={() => {
        history.push("./checkout");
        dispatch(toggleCartHidden())
      }}
    >
      GO TO CHECKOUT
    </CustomBtn>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
