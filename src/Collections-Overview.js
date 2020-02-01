import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "./CollectionPreview";
import { selectCollectionsForPreview } from "./Redux/shop/shop-selector";

import "./Collections-Overview.scss";

const CollectionOverview = ({ collections }) => (
  <div className="Collections-Overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
