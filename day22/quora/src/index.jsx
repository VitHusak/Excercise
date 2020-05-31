import React from "react";
import ReactDOM from "react-dom";
import Question from "./Question/question.jsx";
import "./style.scss";
import "./index.html";

class Inbox extends React.Component {
  render() {
    return (
      <>
      <h1> Quora </h1>

      <Question
        sender="Vít"
        text="This is my stupid question!"
      />
      
      </>
    )
  }
}

const appElm = document.querySelector("#app");
ReactDOM.render(<Inbox />, appElm);
