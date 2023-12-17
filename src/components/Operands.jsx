import React from 'react';

const Operands = ({ onOperandClick }) => {
  return (
    <div className="keypad">
      <button className='btn' onClick={() => onOperandClick('AC')}>AC</button>
      <button className='btn' onClick={() => onOperandClick('+/-')}>+/-</button>
      <button className='btn' onClick={() => onOperandClick('%')}>%</button>
    </div>
  );
}

export default Operands;