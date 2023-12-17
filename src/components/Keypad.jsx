import React from 'react'

const Keypad = ({onKeypadClick }) => {
    
  return (
    <>
    <div className='keypad'>
        <button className='btn' onClick={()=>onKeypadClick('7')}>7</button>
        <button className='btn' onClick={()=>onKeypadClick('8')}>8</button>
        <button className='btn' onClick={()=>onKeypadClick('9')}>9</button>
        <button className='btn' onClick={()=>onKeypadClick('4')}>4</button>
        <button className='btn' onClick={()=>onKeypadClick('5')}>5</button>
        <button className='btn' onClick={()=>onKeypadClick('6')}>6</button>
        <button className='btn' onClick={()=>onKeypadClick('1')}>1</button>
        <button className='btn' onClick={()=>onKeypadClick('2')}>2</button>
        <button className='btn' onClick={()=>onKeypadClick('3')}>3</button>
        <button className='btn btn-zero' onClick={()=>onKeypadClick('0')}>0</button>
        <button className='btn' onClick={()=>onKeypadClick('.')}>.</button>
    </div>
    </>
  )
}

export default Keypad