import React, { Component } from 'react';
import './App.css';
import { getAllReservations } from '../apiCalls.js';
import uuid from 'uuid';
import Bookings from '../Components/Bookings/Bookings';
import AddBooking from '../Components/AddBooking/AddBooking';


//Future Iterations: 
//test to make sure all input fields are filled in before enabling 'make reservation' button
// when clicking "Cancel Reservation" button have a confirmation alert pop up before deleting
// 
class App extends Component {
  constructor() {
    super();
    this.state = {
      bookings: [],
    };
  }
  cancelReservation = (id) => {
    this.setState({ bookings: [...this.state.bookings.filter(booking => booking.id !== id)] })
  }

  addBooking = (booking) => {
    const newBooking = {
      id: uuid.v4(),
      name: booking.name,
      date: booking.date,
      time: booking.time,
      number: booking.number,
    };
    this.setState({ bookings: [...this.state.bookings, newBooking] });
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <AddBooking addBooking={this.addBooking} />
        <Bookings
          bookings={this.state.bookings}
          cancelRes={this.cancelReservation}
        />
      </div>
    );
  }

  componentDidMount() {
    getAllReservations()
      .then((response) => this.setState({ bookings: response }))
      .catch((error) => console.log(error));
  }
}

export default App;
