import React, { Component } from 'react'
import MenuItem from './MenuItem';

export default class MenuDropdown extends Component {

  render () {
    return (
      <div>
        <h3>Title</h3>
        <ul>
          <MenuItem />
        </ul>
      </div>
    );
  }
}