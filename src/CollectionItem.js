import React, { Component } from "react";
import "./CollectionItem.scss";
import CustomBtn from "./CustomBtn";
import { connect } from "react-redux";
import { addItem } from "./Redux/cart/cart-action";

class CollectionItem extends Component {
  render() {
    const { name, price, imageUrl } = this.props.item;
    return (
      <div className="CollectionItem">
        <div
          className="CollectionItem-image"
          style={{ backgroundImage: `Url(${imageUrl})` }}
        />
        <div className="CollectionItem-footer">
          <span className="CollectionItem-name">{name}</span>
          <span className="CollectionItem-price">{price}</span>
        </div>
        <CustomBtn onClick={() => this.props.addItem(this.props.item)} inverted>
          Add to cart
        </CustomBtn>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
