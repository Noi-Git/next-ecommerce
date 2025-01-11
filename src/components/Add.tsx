'use client'

import React, { useState } from 'react'
import { addToCartButton, quantityButton } from './Styles/AddStyle'

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string
  variantId: string
  stockNumber: number
}) => {
  const [quantity, setQuantity] = useState(1)

  // TEMPORARY
  const stock = 4

  const handleQuantity = (type: 'i' | 'd') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
    if (type === 'i' && quantity < stock) {
      setQuantity((prev) => prev + 1)
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Choose a Quantity</h4>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          {/* SELECT QUANTITY BUTTON */}
          <div className={quantityButton}>
            <button
              className='cursor-pointer text-xl'
              onClick={() => handleQuantity('d')}
            >
              -
            </button>
            {quantity}
            <button
              className='cursor-pointer text-xl'
              onClick={() => handleQuantity('i')}
            >
              +
            </button>
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
