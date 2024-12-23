import React from 'react'
import { filterSelect } from './Styles/FilterStyle'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between'>
      {/* LEFT SIDE */}
      <div className='flex gap-6'>
        <select name='type' id='' className={filterSelect}>
          <option>Type</option>
          <option value='physical'>Physical</option>
          <option value='digital'>Digital</option>
        </select>
        <input
          type='text'
          name='min'
          placeholder='min price'
          className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'
        />
        <input
          type='text'
          name='max'
          placeholder='max price'
          className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'
        />
        <select name='size' id='' className={filterSelect}>
          <option>Size</option>
          <option value=''>Size</option>
        </select>
        <select name='color' id='' className={filterSelect}>
          <option>Color</option>
          <option value='test'>Test</option>
        </select>
        <select name='category' id='' className={filterSelect}>
          <option>Category</option>
          <option value=''>New Arrival</option>
          <option value=''>Popular</option>
        </select>
      </div>
      {/* RIGHT SIDE */}
    </div>
  )
}

export default Filter
