import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SliderItemJs.styles';

class SliderItem extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentWillMount = () => {
    console.log('SliderItemJs will mount');
  }

  componentDidMount = () => {
    console.log('SliderItemJs mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('SliderItemJs will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('SliderItemJs will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('SliderItemJs did update');
  }

  componentWillUnmount = () => {
    console.log('SliderItemJs will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="SliderItemJsWrapper">
        Test content
      </div>
    );
  }
}

SliderItemJs.propTypes = {
  // bla: PropTypes.string,
};

SliderItemJs.defaultProps = {
  // bla: 'test',
};

export default SliderItem;
