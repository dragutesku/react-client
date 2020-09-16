import React, { Component } from 'react';


export default class Header extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const items = [1, 2, 3, 4];
    const listItems = items.map((item) => {
      return (
        <li key={item.toString()}>
          {item}
        </li>
      );
    });

    return (
      <div>
        {listItems}
      </div>
    );
  }
}
