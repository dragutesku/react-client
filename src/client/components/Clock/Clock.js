import React, { Component, } from 'react';
import PropTypes from 'prop-types';


class Clock extends Component {
  static propTypes = {
    date: PropTypes.object,
  };

  constructor (props) {
    super(props);
  }

  render () {
    const { date, } = this.props;

    return (
      <div>
        <div>
          <h1>The Time Is !</h1>
          <h2>
            {date.toLocaleTimeString()}
          </h2>
        </div>
      </div>
    );
  }
}

Clock.PropTypes = {
  date: PropTypes.object.isRequired,
};

export default Clock;
