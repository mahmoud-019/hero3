import React from 'react'

export default function Box({children }) {
  return (
    <div className='md:w-11/12 w-full px-2 md:px-0 max-md:m-0 max-md:w-full mx-auto'
    >{children }</div>
  )
}
