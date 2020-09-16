import React, { Component } from 'react';

export default class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isGoing: false,
      reservationName: '',
      numberOfGuests: 1,
      note: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState(
      { [name]: value });
  }

  handleSubmit (event) {
    // alert('I submit this to you: ' + this.state.isGoing);
    event.preventDefault();
  }


  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="reservationName"
              value={this.state.reservationName}
              onChange={this.handleChange}
            />
            Is Going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
            Number of guests:

            Note:
            <textarea name="note" value={this.state.note} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
