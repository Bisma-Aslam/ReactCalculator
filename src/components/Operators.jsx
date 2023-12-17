import React from 'react';

const Operators = ({ onOperatorClick }) => {
  return (
    <div className="keypad2">
      <button className='btn' onClick={() => onOperatorClick('/')}>/</button>
      <button className='btn' onClick={() => onOperatorClick('*')}>*</button>
      <button className='btn' onClick={() => onOperatorClick('-')}>-</button>
      <button className='btn' onClick={() => onOperatorClick('+')}>+</button>
      <button className='btn' onClick={() => onOperatorClick('=')}>=</button>
    </div>
  );
}

export default Operators;