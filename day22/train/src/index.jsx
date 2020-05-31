import React from "react";
import ReactDOM from "react-dom";
import Row from "./Row/row.jsx";

import "./style.scss";
import "./index.html";


export default class Carriage extends React.Component {
  render() {
    return(
      <div className="train-carriage">
        <Row numberOfRow="1"/>
        <Row numberOfRow="2"/>
        <Row numberOfRow="3"/>
        <Row numberOfRow="4"/>
        <Row numberOfRow="5"/>
      </div>
      
    );
  };
};


const appElm = document.querySelector('#app');
ReactDOM.render(<Carriage />, appElm);