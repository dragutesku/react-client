import React, { Component } from 'react';
import classNames from 'classnames';
import Keyboard from './Keyboard';

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
  'text-right',
  'results',
);

export default class Calculator extends Component {
  constructor (props) {
    super(props);
    this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
    this.state = {
      display: '',
      lastResult: '',
      inputValue: '',
    };
  }

  handleKeyboardInput (e) {
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
      // HERE I MAKE OPERATIONS
      console.log('You pressed something else' + ' ' + e);

      // Parse float numbers
      if (e === event.float) {
        console.log(`You started a float digit ${digit}`);
      }
      // Reset the display
      if (e === event.reset) {
        console.log('Your display has been reseted !');
      }
    } else {
      // HERE WE UPDATE DISPLAY WITH DIGITS
      const digit = event.digit.toString();
      this.setState({ display: this.state.display.concat(digit) });
      console.log(digit);
      console.log(`You pressed a digit ${e}`);
    }
  }

  render () {
    const { display } = this.state;

    return (
      <div className={calculatorClasses} >
        <div className={resultClasses}>
          {display ? display : '0'}
        </div>
        <Keyboard keyboardOutput={this.handleKeyboardInput} />
      </div>
    );
  }
};
