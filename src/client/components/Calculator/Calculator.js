import React, { Component } from 'react';
import classNames from 'classnames';
import Keyboard from './Keyboard';


export default class Calculator extends Component {
  constructor (props) {
    super(props);
    this.handleKeyboardOutput = this.handleKeyboardOutput.bind(this);
    this.state = {
      display: '',
      lastResult: '',
      inputValue: '',
    };
  }

  handleKeyboardOutput (e) {
    const event = {
      digit: parseInt(e),
      add: '+',
      substract: '-',
      divide: '/',
      multiply: 'x',
      evaluate: '=',
      reset: 'AC',
      percent: '%',
      negate: '+/-',
      float: '.'
    }

    // Handle Events
    if (isNaN(event.digit)) {
      // HERE ME MAKE OPERATIONS
      console.log('You pressed something else' + ' ' + e);

      // Parse float numbers
      if (e === event.float) {
        console.log('You started a float digit' + ' ' + event.digit);
      }
      // Reset the display
      if (e === event.reset) {
        console.log('Your display has been reseted !');
      }
    } else {
      // HERE WE UPDATE DISPLAY WITH DIGITS
      console.log('You pressed a digit' + ' ' + event.digit);
    }
  }

  render () {
    const calculatorClasses = classNames(
      'p-2',
      'text-xl',
      'text-gray-600',
      'bg-blue-300',
      'calculator',
    );

    const resultClasses = classNames(
      'flex',
      'flex-row-reverse',
      'min-w-full',
      'p-2',
      'results',
    );

    return (
      <div className={calculatorClasses} >
        <input className={resultClasses} type="text" value={this.state.display} readOnly/>
        <Keyboard keyboardOutput={this.handleKeyboardOutput} />
      </div>
    );
  }
}
