'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
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
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    replace(`${pathname}?${params.toString()}`)
  }

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
