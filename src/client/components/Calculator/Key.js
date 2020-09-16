import React, { Component } from 'react';
import classNames from 'classnames';


export default class Key extends Component {
  constructor (props) {
    super(props);

    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent (e) {
    this.props.clickEvent(e);
  }

  render () {
    const keyClasses = classNames(
      'min-w-full',
      'px-8',
      'py-4',
      'bg-gray-400',
    );

    return (
      <button
        className={keyClasses}
        onClick={this.clickEvent}
        value={this.props.value}
      >
        {this.props.name}
      </button>
    );
  }
}
