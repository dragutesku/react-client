import React from 'react';
import ReactDOM from 'react-dom';
import './css/minimal-ui.css';
import './scss/ui.scss';

// Components
import Clock from './client/components/Clock/Clock';
import Toggle from './client/components/Button/Toggle';
import LoginControl from './client/components/LoginControl/LoginControl';


// Comment component end
const App = () => {
  return (
    <div className="container mx-auto">
      <Clock />
      <LoginControl />
      <Toggle />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
