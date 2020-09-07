import React from 'react';
import ReactDOM from 'react-dom';
import './css/minimal-ui.css';
import './scss/ui.scss';

import Clock from './client/components/Clock/Clock';

const user = {
  firstName: 'Alexandru',
  avatarUrl: 'sdadasda',
  secondName: 'Dragutescu',
  text: 'dasdasda',
};

function formatName () {
  return user.firstName + ' ' + user.secondName;
}

function getGreetings (user) {
  if (user) {
    return <h1>Hello, {formatName(user)} !</h1>;
  }

  return <h1>Hello, Stranger.</h1>;
}


function Welcome (props) {
  return <h1>Hello, {props.name}</h1>;
}

// Comment component end
const App = () => {
  return (
    <div className="container mx-auto">
      <div>
        This project is started by {getGreetings(user)}
      </div>
      <Welcome name="Sara" />
      <Welcome name="Alex" />

      <Clock date={new Date()} />
    </div>
  );
};


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
