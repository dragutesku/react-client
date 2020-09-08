import React, { Component, } from 'react';


export default class Button extends Component {
  constructor (props) {
    super(props);
  }

  clickEvent = () => {
    this.props.clickEvent();
  }

  render () {
    return (
      <div>
        <button
          className="Button px-6 py-2 rounded-md bg-indigo-400 text-white"
          onClick={this.clickEvent}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}
