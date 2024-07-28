import React from 'react'
import loader from './loader.gif'

export default function Spinner() {
  return (
    <div className='text-center'>
      <img src={loader} alt='loading' />
    </div>
  )
}
