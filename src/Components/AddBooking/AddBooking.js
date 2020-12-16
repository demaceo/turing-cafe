import React, { Component } from 'react'
import "./AddBooking.css";

class AddBooking extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }

    onChange = (e) => this.setState({ [e.target.alt]: e.target.value })
    onSubmit = (e) => {
        e.preventDefault(); 
        this.props.addBooking(this.state);
        this.setState( { name: '',
            date: '',
            time: '',
            number: ''})
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="booking-form">
                <input type="text" alt="name" name="name" placeholder=" Name" value={this.state.name} onChange={this.onChange}></input>
                <input type="text" alt="date"  placeholder=" Date (mm/dd)" value={this.state.date} onChange={this.onChange}></input>
                <input type="text" alt="time"  placeholder=" Time" value={this.state.time} onChange={this.onChange}></input>
                <input type="text" alt="number"  placeholder=" Number of Guests" value={this.state.number} onChange={this.onChange}></input>
                <input type="submit" className="btn" value=" Make Reservation"></input>
            </form>
        )
    }
}
export default AddBooking;