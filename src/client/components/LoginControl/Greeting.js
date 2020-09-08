import React from 'react';

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (!isLoggedIn) {
    return null;
  }
  if (isLoggedIn) {
    return <h1 className="text-2xl">Welcome Back !</h1>;
  }

  return <h1 className="text-2xl">Please sign up !</h1>;
};

export default Greeting;
