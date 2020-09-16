import React, { Component } from 'react';
import Button from './Button';


export default class Toggler extends Component {
  constructor (props) {
    super(props);

    this.state = { isToggleOn: true };

    // This binding is necessary to make 'this' work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }


  // Using the experimental public class fields syntax class fields binds correctly callbacks
  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log('You clicked the button !', this);
  }

  render () {
    return (
      <div>
        <Button
          text={this.state.isToggleOn ? 'ON' : 'OFF'}
          clickEvent={this.handleClick}
        />
      </div>
    );
  }
}
