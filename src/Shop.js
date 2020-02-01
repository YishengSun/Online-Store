import React from "react";
import CollectionOverview from "./Collections-Overview";
import { Route } from "react-router-dom";
import Collection from "./Collection";

const Shop = ({ match }) => (
  <div className="Shop">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path="/shop/:collectionId" component={Collection} />   {/* nested router需要/shop不是exact在app中 */}
  </div>
);

export default Shop;
