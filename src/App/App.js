import React, { Component } from 'react';
import './App.css';
import { getAllReservations } from '../apiCalls.js';
import Bookings from '../Components/Bookings/Bookings';

class App extends Component {
  constructor(){
    super();
      this.state = {
        bookings: [],
      };
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        <Bookings bookings={this.state.bookings} cancelRes={this.cancelReservation}/>
      </div>
    );
  }
  cancelReservation(){
    console.log("cancel")
  }
  componentDidMount() {
    getAllReservations()
      .then((response) => this.setState({ bookings: response }))
      .catch((error) => console.log(error));
       console.log(this.state.bookings);
  }
}

export default App;
