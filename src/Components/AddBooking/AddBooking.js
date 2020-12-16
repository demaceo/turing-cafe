import React, { Component } from 'react'
import "./AddBooking.css";
import PropTypes from 'prop-types';

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

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
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
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.onChange}></input>
                <input type="text" name="date"  placeholder="Date" value={this.state.date} onChange={this.onChange}></input>
                <input type="text" name="time"  placeholder="Time" value={this.state.time} onChange={this.onChange}></input>
                <input type="text" name="number"  placeholder="Number of Guests" value={this.state.number} onChange={this.onChange}></input>
                <input type="submit" className="btn" value="Make Reservation"></input>
            </form>
        )
    }
    // AddBooking.propTypes = {
    //     addBooking: PropTypes.func.isRequired
    // }
}
export default AddBooking;