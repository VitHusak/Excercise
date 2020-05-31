import React from "react";
import Seat from "../Seat/seat.jsx";

import "./style.scss";


export default class Row extends React.Component {
  render() {
    const nR = Number(this.props.numberOfRow) - 1;
    console.log(nR);
    return(
      <div className="carriage-row">
        <Seat numberOfSeat={`${nR*4 + 1}`} />
        <Seat numberOfSeat={`${nR*4 + 2}`} />
        <div className="aisle-spacer"></div>
        <Seat numberOfSeat={`${nR*4 + 3}`} />
        <Seat numberOfSeat={`${nR*4 + 4}`} />
      </div>
    );
  };
};
