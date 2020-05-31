import React from "react";

import DayForecast from "../DayForecast/dayForecast.jsx";

import "./style.scss";
import { forecast } from "./forecast.js";




export default class WeeklyForecast extends React.Component {

  
  render() {
    return (
        <div className="container">
          <h1>Weekly Weather Forecast</h1>

          <div className="week-forecast">

            {forecast.map((day) => {

              return (<DayForecast 
                days={day.weekday}
                tempDay={day.tempDay}
                tempNight={day.tempNight}
                picClass={day.weather}
              />)
              
            })}

          </div>
        </div>
    );
  }
}

