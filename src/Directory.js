import React from "react";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";
import { selectDirectorySections } from "./Redux/directory/directory-selector"
import { createStructuredSelector } from "reselect";
import "./Directory.scss";

const Directory = ({sections}) => (
  <div className="Directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory)