import React from 'react';


const BoilingMessage = (props) => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil.</p>;
  }
};

export default BoilingMessage;
