import React, { Component } from "react";
import "./CollectionPreview.scss";
import "./CollectionItem"
import CollectionItem from "./CollectionItem";

export default class CollectionPreview extends Component {
  render() {
    return (
      <div className="CollectionPreview">
        <h1 className="CollectionPreview-title">{this.props.title}</h1>
        <div className="CollectionPreview-preview">
          {this.props.items
            .filter((item, idx) => idx < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    );
  }
}
