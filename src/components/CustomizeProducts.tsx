'use client'

import React from 'react'
import {
  chooseColorBlue,
  chooseColorGreen,
  chooseColorRed,
  selectedColor,
  sizeLargeButton,
  sizeMediumButton,
  sizeSmallButton,
  unavailableColor,
} from './Styles/CustomizeProductsStyle'
import { products } from '@wix/stores'

const CustomizeProducts = ({
  productId,
  variants,
  productOption,
}: {
  productId: string
  variants: products.Variant[]
  productOption: products.ProductOption[]
}) => {
  return (
    <div className='flex flex-col gap-6'>
      {/* CHOOSE COLOR */}
      {productOption.map((option) => (
        <div className='flex flex-col gap-4' key={option.name}>
          <h4 className='font-medium'>option.name</h4>
          <ul className='flex items-center gap-3'>
            {/* INSIDE CIRCLE */}
            <li className={chooseColorRed}>
              {/* OUTSIDE CIRCLE - WHEN ITEM SELECTED */}
              <div className={selectedColor}></div>
            </li>
            <li className={chooseColorBlue}></li>
            <li className={chooseColorGreen}>
              {/* CROSS LINE - WHEN ITEM IS NOT AVAILABLE */}
              <div className={unavailableColor}></div>
            </li>
          </ul>
        </div>
      ))}

      {/* CHOOSE SIZE */}
      {/* <h4 className='font-medium'>Choose a size</h4>
      <ul className='flex items-center gap-3'>
        <li className={sizeSmallButton}>Small</li>
        <li className={sizeMediumButton}>Medium</li>
        <li className={sizeLargeButton}>Large</li>
      </ul> */}
    </div>
  )
}

export default CustomizeProducts
