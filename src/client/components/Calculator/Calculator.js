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
      result: '',
      lastResult: '',
      lastValue: '',
    };
  }

  handleKeyboardInput (e) {
    const event = {
      digit: parseInt(e),
      operations: ['+', '-', '*', '/'],
      evaluate: '=',
      reset: 'AC',
      percent: '%',
      negate: '+/-',
      float: '.'
    }
    
    const { display } = this.state;

    // Handle Events
    if (isNaN(event.digit)) {
      const operation = event.operations.find(operation => operation.startsWith(e));

      if (e === operation) {
        console.log(`Operation: ${operation}`);

        switch (operation) {
          case '+':
            console.log('You want an addition');
          case '-':
            console.log('You want a substraction');
        }
      } else {
        console.log(`You pressed ${e}`);
      }

      // Parse float numbers
      if (e === event.float && display) {
        const float = event.float.toString();
        this.setState({ display: display.concat(event.float) });
      }
      // Reset the display
      if (e === event.reset) {
        this.setState({ display: '' });
        console.log('Your display has been reseted !');
      }
    } else {
      // HERE WE UPDATE DISPLAY WITH DIGITS
      const digit = event.digit.toString();
      this.setState({ display: display.concat(digit) });
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
