import React from 'react';

const MenuItem = (props) => {
  return (
    <li className="MenuItem" key={props.itemName.toString()}>
      <a href={props.itemLocation} key={props.itemName.toString()}>
        {props.itemName}
      </a>
    </li>
  );
}

export default MenuItem;
