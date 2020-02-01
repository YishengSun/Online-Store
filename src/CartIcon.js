import React from "react";

import ShoppingIcon from "./Assets/shopping-bag.svg";

import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "./Redux/cart/cart-action";
import { selectCartItemsCount } from "./Redux/cart/cart-selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="CartIcon" onClick={toggleCartHidden}>
    <img src={ShoppingIcon} className="shopping-icon" alt="icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProp = state => ({
  itemCount: selectCartItemsCount(state)
});

// const mapStateToProp = (state) => ({
//   itemCount:state.cart.cartItems.reduce((accumalatedQuantity,cartItem)=>accumalatedQuantity+cartItem.quantity,0)
// })

// const mapStateToProp = ({cart:{cartItems}}) => ({
//   itemCount:cartItems.reduce((accumalatedQuantity,cartItem)=>accumalatedQuantity+cartItem.quantity,0)
// })

export default connect(mapStateToProp, mapDispatchToProps)(CartIcon);
