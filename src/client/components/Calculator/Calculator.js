import React, { Component } from 'react';
import classNames from 'classnames';
import Keyboard from './Keyboard';


export default class Calculator extends Component {
  constructor (props) {
    super(props);
    this.getKeyboardOutput = this.getKeyboardOutput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      result: '0'
    };
  }

  getKeyboardOutput (e) {
    const { result } = this.state;
    result !== '0' ? 
      this.setState({ result: result.concat(e) }) : 
      this.setState({ result: e })
    ;
    console.log(e);
  }

  handleReset (e) {
    if(e === 'AC') {
      this.setState({ result: '0' });
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
      'p-2',
      'results',
    );

    return (
      <div className={calculatorClasses} >
        <div className={resultClasses}>
          {this.state.result}
        </div>
        <Keyboard  
          keyboardOutput={this.getKeyboardOutput}
          keyboardReset={this.handleReset}
        />
      </div>
    );
  }
}
