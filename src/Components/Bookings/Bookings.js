import React from 'react'
import Reservation from '../Reservation/Reservation';
import './Bookings.css';

export default function Bookings(props) {
const bookingCards = props.bookings.map(booking => {
    return (
      <Reservation
        name={booking.name}
        date={booking.date}
        time={booking.time}
        number={booking.number}
        cancelRes={props.cancelRes}
        id={booking.id}
        key={booking.id}
      />
    );
})

  return (
    <>
      <h2>Bookings</h2>
      <section className='bookings'>
        {bookingCards}
      </section>
    </>
  )
}

