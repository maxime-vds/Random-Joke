import React from 'react';

const Button = ({ onClick, label }) => (
  <button onClick={onClick} className="border border-black rounded-full justify-center text-xl bg-yellow-500 hover:bg-yellow-300 px-5 p-3 text-yellow">
    {label} New joke
  </button>
);

export default Button;
