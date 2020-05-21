'use strict';

class Bus{
  constructor(direction, stations, seats, passengers, last_station){
    this.direction = direction;
    this.stations = stations;
    this.seats = seats;
    this.passengers = passengers;
    this.last_station = last_station;
  };

  current() {
    console.log(this.stations[this.last_station]);
  };

  next() {
    this.last_station += 1;
    console.log(this.last_station);

  };

  board(count) {
    const sum = count + this.passengers;
    if((this.seats - sum) > 0){
      this.passengers += count;
      console.log(this.passengers);
    } else {
      this.passengers += this.seats - this.passengers
      alert(`There is no psace for ${count - (this.seats - this.passengers)}!`);
    }
  };

  onboard(count) {
    const sum = count + this.passengers;
    if((this.seats - sum) > 0){
      this.passengers += count;
      console.log(this.passengers);
    } else {
      alert(`We have just ${this.seats - this.passengers} seats, it is not enough for this group!`);
    }
  };

};

const bus1 = new Bus('Vídeň', ['Praha', 'Jihlava', 'Brno', 'Břeclav', 'Vídeň'], 50, 0, 0);


const arr = [1, 2, 3,'hi'];
const newarr = arr.slice();

newarr.pop();

console.log(arr);
console.log(newarr);
