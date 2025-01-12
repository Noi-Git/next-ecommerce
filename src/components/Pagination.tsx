'use client'

import { paginationButton } from './Styles/PaginationStyle'

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number
  hasPrev: boolean
  hasNext: boolean
}) => {
  return (
    <div className='mt-12 flex justify-between w-full'>
      <button className={paginationButton}>Previous</button>
      <button className={paginationButton}>Next</button>
    </div>
  )
}

export default Pagination
