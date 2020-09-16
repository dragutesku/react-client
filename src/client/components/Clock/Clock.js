import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Clock extends Component {
  static propTypes = {
    date: PropTypes.object
  };

  constructor (props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount () {
    clearInterval(this.timerID);
  }

  tick () {
    this.setState({ date: new Date() });
  }

  render () {
    const { date } = this.state;

    return (
      <div className="Clock">
        <div>
          <h1 className="text-2xl">The Time Is !</h1>
          <h2 className="text-2xl">
            {date.toLocaleTimeString()}
          </h2>
        </div>
      </div>
    );
  }
}
