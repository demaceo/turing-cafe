import React from 'react'
import './Reservation.css'
export default function Reservation(props) {
    return (
      <section className="reservation">
        <h3>{props.name}</h3>
        <p>{props.date}</p>
        <p>{props.time}pm</p>
        <p>Number of Guests: {props.number}</p>
        <button onClick={() => props.cancelRes(props.id)}>Cancel</button>
      </section>
    );
}
