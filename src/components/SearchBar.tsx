'use client'

import Image from 'next/image'
import { searchBar, searchBarInput } from './NavStyle'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string

    if (name) {
    }
  }

  return (
    <form className={searchBar} onSubmit={handleSearch}>
      <input
        type='text'
        name='name'
        placeholder='Search'
        className={searchBarInput}
      />
      <button className='cursor-pointer'>
        <Image src='/search.png' alt='' width={16} height={16} />
      </button>
    </form>
  )
}

export default SearchBar
