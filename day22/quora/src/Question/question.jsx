import React from "react";
import Answer from "../Answer/answer.jsx"
import "./style.scss";

export default class Question extends React.Component {
  render() {
    return (
      <div className="question">
        <div className="question__sender">{this.props.sender}</div>
        <div className="question__text">{this.props.text}</div>

        <Answer />

      </div>
    );
  }
}
