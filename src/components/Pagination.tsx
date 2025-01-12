'use client'

import {
  paginationNextButton,
  paginationPrevButton,
} from './Styles/PaginationStyle'

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number
  hasPrev: boolean
  hasNext: boolean
}) => {
  const disableButton = 'disabled={!hasNext}'
  return (
    <div className='mt-12 flex justify-between w-full'>
      <button className={paginationPrevButton} disabled={!hasPrev}>
        Previous
      </button>
      <button className={paginationNextButton} disabled={!hasNext}>
        Next
      </button>
    </div>
  )
}

export default Pagination
