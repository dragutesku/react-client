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
  'flex-col',
  'min-w-full',
  'p-2',
  'text-right',
  'results',
);

const event = {
  operations: ['+', '-', '*', '/'],
  evaluate: '=',
  fullReset: 'AC',
  displayReset: 'C',
  percent: '%',
  negate: '+/-',
  float: '.'
}

export default class Calculator extends Component {
  constructor (props) {
    super(props);
    this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
    this.state = {
      total: 0,
      result: 0,
      display: '',
      firstInput: '',
      lastResult: '',
    };
  }

  handleKeyboardInput (e) {
    const digit = parseFloat(e);
  //   const { 
  //     total,
  //     display, 
  //     firstInput, 
  //     result, 
  //     lastResult 
  // } = this.state;

    // Updates the display
    const updateDisplay = () => {
      const newDigit = digit.toString();
      this.setState((state) => { 
        display: state.display.concat(newDigit) 
      });
      console.log(`You pressed a digit ${e}`);
    }

    // Handle Events
    if (isNaN(digit)) {
      const operation = event.operations.find(operation => operation.startsWith(e));
      if (e === operation) {

        const operationUpdate = (setResult) => {
          this.setState({
            total: setResult.toString(),
            result: setResult.toString(),
          });
          this.setState((state) => { display: '' });
          console.log(`The result is: ${result}`);
        }

        const handleAddition = () => {
          const setResult = Number(display) + Number(result);
          operationUpdate(setResult);
        }

        const handleSubstraction = () => {
          const setResult = Number(display) - Number(result);
          operationUpdate(setResult);
        }

        const handleDivision = () => {
          const setResult = Number(display) / Number(result);
          operationUpdate(setResult);
        }

        const handleMultiplication = () => {
          const setResult = Number(display) * Number(result);
          operationUpdate(setResult);
        }

        switch (operation) {
          case '+':
            handleAddition();
            console.log('You want addition');
            break;
          case '-':
            handleSubstraction();
            console.log('You want substraction');
            break;
          case '*':
            handleMultiplication();
            console.log('You want multiplication');
            break;
          case '/':
            handleDivision();
            console.log('You want division');
            break;
        }
        console.log(`Operation: ${operation}`);
      } else {
        console.log(`You pressed ${e}`);
      }

      // Parse float numbers
      if (e === event.float && this.state.display) {
        const float = event.float.toString();
        this.setState((state) => { 
          display: state.display.concat(event.float) 
        });
      }
      // Reset the display
      if (e === event.displayReset) {
        this.setState({ display: '' });
        console.log('Display Reset happened !');
      } else if (e === event.fullReset) {
        this.setState({ 
          display: '', 
          firstInput: '',
          result: '',
          lastResult: '',
          total: 0,
        });
        console.log('Full Reset happened !');
      }
    } else {
      // HERE WE UPDATE DISPLAY WITH DIGITS
      // NOTE: Can be converted to Number in state ASK JALBA
      updateDisplay();
    }
  }

  render () {
    const { 
      display, 
      total 
    } = this.state;

    return (
      <div className={calculatorClasses} >
        <div className={resultClasses}>
          {/* Total */}
          <p className="min-w-full">{total ? total : 0}</p>
          {/* Digits display */}
          <p className="min-w-full">{display ? display : 0}</p>
        </div>
        <Keyboard keyboardOutput={this.handleKeyboardInput} />
      </div>
    );
  }
};
