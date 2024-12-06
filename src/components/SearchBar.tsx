'use client'

import Image from 'next/image'
import { searchBar, searchBarInput } from './NavStyle'

const SearchBar = () => {
  return (
    <form className={searchBar}>
      <input type='text' placeholder='Search' className={searchBarInput} />
      <button className='cursor-pointer'>
        <Image src='/search.png' alt='' width={16} height={16} />
      </button>
    </form>
  )
}

export default SearchBar
