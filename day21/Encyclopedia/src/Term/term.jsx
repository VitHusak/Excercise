import React from "react";
import "./style.scss";

export default class Term extends React.Component {
  render() {
    return (
      <div className="term">

        <h2 className="term__h2">{this.props.h2}</h2>
        <div className="term__explain">{this.props.explain}</div>

      </div>
    );
  }
}
