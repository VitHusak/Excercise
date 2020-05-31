import React from "react";
import ReactDOM from "react-dom";
import Toggle from "./Toggle/toggle.jsx";
import "./style.scss";
import "./index.html"

class Todo extends React.Component {
  render() {
    return (
      <>
      <div class="todo">
        <p class="todo__text">Tohle udelej</p>
        <Toggle />
      </div>
      <div class="todo">
        <p class="todo__text">Tohle udelej</p>
        <Toggle />
      </div>
      </>
    )
  }
}

const appElm = document.querySelector('#app');
ReactDOM.render(<Todo />, appElm);