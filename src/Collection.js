import React from "react";
import CollectionItem from "./CollectionItem";
import "./Collection.scss";
import { connect } from "react-redux";
import { selectCollection } from "./Redux/shop/shop-selector";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="Collection">
      <h2 className="Collection-title">{title}</h2>
      <div className="Collection-items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
