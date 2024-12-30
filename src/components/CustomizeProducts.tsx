'use client'

import React, { useState } from 'react'
import {
  chooseColor,
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
  productOptions,
}: {
  productId: string
  variants: products.Variant[]
  productOptions: products.ProductOption[]
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string
  }>({})

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }))
  }

  console.log(variants)
  // Check if the item exist in stock
  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices
      if (!variantChoices) return false

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      )
    })
  }
  console.log('🚀 ~ returnvariants.some ~ variants:', variants)

  console.log(selectedOptions)

  return (
    <div className='flex flex-col gap-6'>
      {/* CHOOSE COLOR */}
      {productOptions.map((option) => (
        <div className='flex flex-col gap-4' key={option.name}>
          <h4 className='font-medium'>Choose a {option.name}</h4>
          <ul className='flex items-center gap-3'>
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              })
              const selected =
                selectedOptions[option.name!] === choice.description

              return option.name === 'Color' ? (
                <li
                  key={option.name}
                  className={chooseColor}
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                  }}
                >
                  {selected && <div className={selectedColor}></div>}
                  {disabled && <div className={unavailableColor}></div>}
                </li>
              ) : (
                <li className={sizeSmallButton}>{choice.description}</li>
              )
            })}
          </ul>
        </div>
      ))}

      {/* === COLOR === */}
      {/*
      
          <ul className='flex items-center gap-3'>
            <li className={chooseColorRed}>
              <div className={selectedColor}></div>
            </li>
            <li className={chooseColorBlue}></li>
            <li className={chooseColorGreen}>
              <div className={unavailableColor}></div>
            </li>
          </ul>
          */}

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

// (
//   <div
//     className=''
//     key={choice.value}
//     onClick={() =>
//       handleOptionSelect(option.name!, choice.description!)
//     }
//   >
//     {/* if it disable - show the text disabled {disabled && 'disabled'} */}
//     {choice.description}
//     {disabled && 'disabled'}
//     {selected && 'selected'}
//   </div>
// )
