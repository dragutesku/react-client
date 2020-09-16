
import React, { Component } from 'react';
import Greeting from './Greeting';
import Button from '../Button/Button';


export default class LoginControl extends Component {
  constructor (props) {
    super(props);

    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginCLick = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <Button text="Logout" clickEvent={this.handleLogoutClick} />;
    } else {
      button = <Button text="Login" clickEvent={this.handleLoginCLick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}
