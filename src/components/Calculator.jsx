import React, { useState } from 'react';
import Input from './Input.jsx';
import Keypad from './Keypad.jsx';
import Operators from './Operators.jsx';
import Operands from './Operands.jsx';
import '../App.css';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [expressionParts, setExpressionParts] = useState([]);

  const handleOperandClick = (value) => {
    if (value === 'AC') {
      setInputValue('');
      setExpressionParts([]);
    } else if (value === '%') {
      handlePercentage();
    } else if (value === '+/-') {
      handleToggleSign();
    } else {
      setInputValue((prevValue) => `${prevValue}${value}`);
      setExpressionParts((prevParts) => [...prevParts, value]);
    }
  };

  const handleToggleSign = () => {
    const lastPartIndex = expressionParts.length - 1;
    if (lastPartIndex >= 0 && !isNaN(expressionParts[lastPartIndex])) {
      const lastPart = expressionParts[lastPartIndex];
      const toggledValue = lastPart.startsWith('-') ? lastPart.slice(1) : `-${lastPart}`;
      expressionParts[lastPartIndex] = toggledValue;
      setInputValue(expressionParts.join(''));
    } else {
      setInputValue('Error: Invalid +/-');
    }
  };

  const handleKeypadClick = (value) => {
    setInputValue((prevValue) => `${prevValue}${value}`);
    setExpressionParts((prevParts) => [...prevParts, value]);
  };

  const handleOperatorClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else {
      const lastPart = expressionParts[expressionParts.length - 1];
      if (!isOperator(lastPart)) {
        setExpressionParts((prevParts) => [...prevParts, value]);
        setInputValue((prevValue) => `${prevValue}${value}`);
      } else if ((lastPart === '-' || lastPart === '+') && (value === '-' || value === '+')) {
        const newParts = [...expressionParts];
        newParts.pop();
        newParts.push(value);
        setExpressionParts(newParts);
        setInputValue((prevValue) => prevValue.slice(0, -1) + value);
      } else if ((lastPart === '*' || lastPart === '/') && (value === '*' || value === '/')) {
        const newParts = [...expressionParts];
        newParts.pop();
        newParts.push(value);
        setExpressionParts(newParts);
        setInputValue((prevValue) => prevValue.slice(0, -1) + value);
      } else if ((lastPart === '*' || lastPart === '/') && (value === '-' || value === '+')) {
        const newParts = [...expressionParts];
        newParts.push(value);
        setExpressionParts(newParts);
        setInputValue((prevValue) => prevValue + value);
      } else if ((lastPart === '-' || lastPart === '+') && (value === '*' || value === '/')) {
        const newParts = [...expressionParts];
        newParts.pop();
        newParts.push(value);
        setExpressionParts(newParts);
        setInputValue((prevValue) => prevValue.slice(0, -1) + value);
      }
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(expressionParts.join(''));
      setInputValue(result.toString());
      setExpressionParts([result.toString()]);
    } catch (error) {
      setInputValue('Error');
      setExpressionParts([]);
    }
  };

  const handlePercentage = () => {
    const lastPartIndex = expressionParts.length - 1;
    if (lastPartIndex >= 0 && !isNaN(expressionParts[lastPartIndex])) {
      const lastPart = parseFloat(expressionParts.pop()) / 100;
      setInputValue(lastPart.toString());
      setExpressionParts([lastPart.toString()]);
    } else {
      setInputValue('Error: Invalid Percentage');
    }
  };

  const isOperator = (value) => {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(value);
  };

  return (
    <div className='calc'>
      <Input value={inputValue} />
      <div className="obj">
        <div>
          <Operands onOperandClick={handleOperandClick} />
          <Keypad onKeypadClick={handleKeypadClick} />
        </div>
        <Operators onOperatorClick={handleOperatorClick} />
      </div>
    </div>
  );
};

export default Calculator;
