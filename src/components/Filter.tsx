'use client'
import React from 'react'
import { filterInput, filterSelect, filterSortBy } from './Styles/FilterStyle'
import { useParams, useSearchParams, useRouter } from 'next/navigation'

const Filter = () => {
  const pathname = useParams()
  const searchPharams = useSearchParams()
  const { replace } = useRouter()

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target
    console.log('🚀 ~ handleFilterChange ~ value:', value)
    console.log('🚀 ~ handleFilterChange ~ name:', name)
  }

  return (
    <div className='mt-12 flex justify-between'>
      {/* LEFT SIDE */}
      <div className='flex gap-6 flex-wrap'>
        <select
          name='type'
          id=''
          className={filterSelect}
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value='physical'>Physical</option>
          <option value='digital'>Digital</option>
        </select>
        <input
          type='text'
          name='min'
          placeholder='min price'
          className={filterInput}
          onChange={handleFilterChange}
        />
        <input
          type='text'
          name='max'
          placeholder='max price'
          className={filterInput}
          onChange={handleFilterChange}
        />

        <select name='cat' id='' className={filterSelect}>
          <option>Category</option>
          <option value=''>New Arrival</option>
          <option value=''>Popular</option>
        </select>
        <select name='' id='' className={filterSelect}>
          <option>All Filters</option>
        </select>
      </div>
      {/* RIGHT SIDE */}
      <select
        name='sort'
        id=''
        className={filterSortBy}
        onChange={handleFilterChange}
      >
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
