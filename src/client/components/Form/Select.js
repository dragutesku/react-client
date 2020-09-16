import React, { Component } from 'react';


export default class Select extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: 'Chose an Option'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({ value: event.target.value });
  }

  handleTextareaChange (event) {
    this.setState({ textareaValue: event.target.value });
  }

  handleSubmit (event) {
    // alert('I submit this to you: ' + this.state.value);
    event.preventDefault();
  }


  render () {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <label>
            Name:
            <select value={this.state.value}>
              <option value="Grapefruit" />
              <option value="Coconut" />
              <option value="Vanilla" />
            </select>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
