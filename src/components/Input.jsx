import React from 'react'

const Input = ({value}) => {
  return (
    <>
    <input className='text' type="text" value={value} disabled/>
    </>
  )
}

export default Input