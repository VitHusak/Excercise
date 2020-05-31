import React from "react";
import "./style.scss";

export default class DayForecast extends React.Component {
  state = {
    selected: false,
    count: 0,
  };

  handleClick = () => {
    
    this.setState({
      selected: !this.state.selected,
      count: this.state.count + 1,
    });
    console.log(this.state.count)
  };


  render() {

    let forecastClass = "day-forecast";

    if (this.state.selected === true) {
      forecastClass = "day-forecast day-forecast--selected";
    }

    return (
      <>
      <div className={forecastClass} onClick={this.handleClick}>
        <div className="day-forecast__header">{this.props.days}</div>
        <div className="day-forecast__body">
          <div className={`day-forecast__image weather-${this.props.picClass}`}></div>
          <div className="day-forecast__temps">
            <span className="temp-day">{this.props.tempDay}</span>
            <span className="temp-night">{this.props.tempNight}</span>
          </div>
          <div>{this.state.count}</div>
        </div>
      </div>
      </>
    );
  }
}
