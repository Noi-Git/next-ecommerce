import React from 'react'

const Add = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Choose a Quantity</h4>
      <div className=''></div>
      <button className='w-36 text-sm rounded-3xl ring-1 ring-salmon-color text-salmon-color py-2 px-4 hover:bg-salmon-color hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-non'>
        Add to Cart
      </button>
    </div>
  )
}

export default Add
