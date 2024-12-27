import React from 'react'

const CustomizeProducts = () => {
  return (
    <div className='flex flex-col gap-6'>
      {/* CHOOSE COLOR */}
      <h4 className='font-medium'>Choose a color</h4>
      <div className='flex items-center gap-3'>
        <ul className='flex items-center gap-3'>
          {/* INSIDE CIRCLE */}
          <li className='w-8 h-8 rounded-full right-1 ring-gray-300 cursor-pointer relative bg-red-500 '>
            {/* OUTSIDE CIRCLE - WHEN ITEM SELECTED */}
            <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
          </li>
          <li className='w-8 h-8 rounded-full right-1 ring-gray-300 cursor-pointer relative bg-blue-500 '></li>
          <li className='w-8 h-8 rounded-full right-1 ring-gray-300 cursor-pointer relative bg-green-500 '></li>
        </ul>
      </div>
      {/* CHOOSE SIZE */}
      <h4 className='font-medium'>Choose a size</h4>
      <div className='flex items-center gap-3'></div>
    </div>
  )
}

export default CustomizeProducts
