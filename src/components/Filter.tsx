import React from 'react'
import { filterInput, filterSelect, filterSortBy } from './Styles/FilterStyle'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between'>
      {/* LEFT SIDE */}
      <div className='flex gap-6 flex-wrap'>
        <select name='type' id='' className={filterSelect}>
          <option>Type</option>
          <option value='physical'>Physical</option>
          <option value='digital'>Digital</option>
        </select>
        <input
          type='text'
          name='min'
          placeholder='min price'
          className={filterInput}
        />
        <input
          type='text'
          name='max'
          placeholder='max price'
          className={filterInput}
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
      <select name='' id='' className={filterSortBy}>
        <option>Sort By</option>
        <option value=''>Price (low to high)</option>
        <option value=''>Price (high to low)</option>
        <option value=''>Newest</option>
        <option value=''>Oldest</option>
      </select>
    </div>
  )
}

export default Filter
