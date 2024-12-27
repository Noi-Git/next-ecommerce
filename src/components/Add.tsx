'use client'

import React, { useState } from 'react'
import { addToCartButton } from './Styles/AddStyle'

const Add = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Choose a Quantity</h4>
      <div className=''>
        {/* SELECT QUANTITY BUTTON */}
        <div className=''>
          <button className=''>-</button>
          {quantity}
          <button className=''>+</button>
        </div>
        {/* SELECT QUANTITY TEXT */}
        <div className='text-xs'>
          Only <span className='text-orange-500'>4 items</span> left! <br />
          {"Don't"} miss it
        </div>
      </div>
      <button className={addToCartButton}>Add to Cart</button>
    </div>
  )
}

export default Add
