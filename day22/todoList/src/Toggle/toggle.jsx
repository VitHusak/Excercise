import React from "react";
import "./style.scss";


export default class Toggle extends React.Component {
  state = {
    counter: 0
  }
  handleClick = () => {
    switch(this.state.counter) {
      case 0: 
      this.setState({counter: 1});
      break;
      case 1: 
      this.setState({counter: 2});
      break;
      case 2: 
      this.setState({counter: 0});
    }
  };

  render() {


    return (
      <div className={`toggle toggle--bg${this.state.counter}`} onClick={this.handleClick}></div>
    )
  }
}


