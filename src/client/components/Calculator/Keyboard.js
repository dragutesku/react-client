import React, { Component } from 'react';
import classNames from 'classnames';
import Key from './Key';

const specials = ['AC', '+/-', '%'];
const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];
const operations = ['/', 'x', '-', '+', '='];

export default class Keyboard extends Component {
  constructor (props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress (e) {
    this.props.keyboardOutput(e.target.value);
    this.props.keyboardReset(e.target.value);
    this.props.keyboardEvaluate(e.target.value);
  }

  render () {
    const keyboardClasses = classNames(
      'flex',
      'flex-row',
      'flex-no-wrap',
      'w-full',
      'p-2',
      'keyboard',
    );

    const getSpecials = specials.map(special => {
      return (
        <li
          className="special"
          key={special.toString()}
        >
          <Key
            name={special}
            clickEvent={this.handleKeyPress}
            value={special}
          />
        </li>
      );
    });

    const getKeys = keys.map(key => {
      return (
        <li
          className="key"
          key={key.toString()}
        >
          <Key
            name={key}
            clickEvent={this.handleKeyPress}
            value={key}
          />
        </li>
      );
    });

    const getOperations = operations.map(operation => {
      return (
        <li
          className="operation"
          key={operation.toString()}
        >
          <Key
            name={operation}
            clickEvent={this.handleKeyPress}
            value={operation}
          />
        </li>
      );
    });

    return (
      <div className={keyboardClasses}>
        <ul className="w-full specials">
          {getSpecials}
        </ul>
        <ul className="w-full keys">
          {getKeys}
        </ul>
        <ul className="w-full operations">
          {getOperations}
        </ul>
      </div>
    );
  }
}
