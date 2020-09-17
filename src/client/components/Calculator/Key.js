import React, { Component } from 'react';
import classNames from 'classnames';


export default class Key extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const keyClasses = classNames(
      'min-w-full',
      'px-8',
      'py-4',
      'bg-gray-400',
    );

    const { 
      clickEvent, 
      value, 
      name, 
    } = this.props;

    return (
      <button
        className={keyClasses}
        onClick={clickEvent}
        value={value}
      >
        {name}
      </button>
    );
  }
}
