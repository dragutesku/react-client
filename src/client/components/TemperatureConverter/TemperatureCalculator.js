import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingMessage from './BoilingMessage';

function toCelsius (fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit (celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert (temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default class TemperatureCalculator extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
    this.state = {
      temperature: '',
      scale: ''
    };
  }

  handleChange (e) {
    this.setState({ temperature: e.target.value });
  }

  handleCelsiusChange (temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFarenheitChange (temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render () {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFarenheitChange}
        />
        <BoilingMessage
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
