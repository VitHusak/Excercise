import React from "react";
import ReactDOM from "react-dom";

import WeeklyForecast from "./WeeklyForecast/weeklyForecast.jsx";

import "./style.scss";
import "./index.html";


const appElm = document.querySelector("#app");
ReactDOM.render(<WeeklyForecast />, appElm);
