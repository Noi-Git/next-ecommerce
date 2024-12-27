'use client'

import React, { useState } from 'react'
import { addToCartButton } from './Styles/AddStyle'

const Add = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Choose a Quantity</h4>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          {/* SELECT QUANTITY BUTTON */}
          <div className='bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32'>
            <button className='cursor-pointer text-xl'>-</button>
            {quantity}
            <button className='cursor-pointer text-xl'>+</button>
          </div>
          {/* SELECT QUANTITY TEXT */}
          <div className='text-xs'>
            Only <span className='text-orange-500'>4 items</span> left! <br />
            {"Don't"} miss it
          </div>
        </div>
        <button className={addToCartButton}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Add
