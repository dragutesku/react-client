import React from 'react';
import ReactDOM from 'react-dom';
import '../static/css/minimal-ui.css';
import './scss/ui.scss';

// Components
// import Header from './client/components/Header/Header';
import Clock from './client/components/Clock/Clock';
import Toggle from './client/components/Button/Toggle';
import LoginControl from './client/components/LoginControl/LoginControl';
import Form from './client/components/Form/Form';
import TemperatureCalculator from './client/components/TemperatureConverter/TemperatureCalculator';
import Calculator from './client/components/Calculator/Calculator';
import Todo from './client/components/todo/todo';


// Comment component end
const App = () => {
  return (
    <div className="container mx-auto">
      {/* <Header /> */}
      <Clock />
      <LoginControl />
      <Toggle />

      <Form />

      <TemperatureCalculator />

      {/* <Calculator /> */}
      <Todo />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
