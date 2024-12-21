import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  categoryListContainer,
  categoryListImage,
  categoryListImageWrapper,
  categoryListLink,
  categoryListLinkWrapper,
  categoryName,
} from './Styles/CategoryList'

const CategoryList = () => {
  return (
    <div className={categoryListContainer}>
      <div className={categoryListLinkWrapper}>
        <Link href='/list?cat=test' className={categoryListLink}>
          <div className={categoryListImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/33393/caudata-strelitzia-bird-of-paradise-flower-strelitzia-orchids.jpg?auto=compress&cs=tinysrgb&w=800'
              alt=''
              fill
              sizes='20vw'
              className={categoryListImage}
            />
          </div>
          <h1 className={categoryName}>Category Name</h1>
        </Link>
        {/* ==== */}
        <Link href='/list?cat=test' className={categoryListLink}>
          <div className={categoryListImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/33393/caudata-strelitzia-bird-of-paradise-flower-strelitzia-orchids.jpg?auto=compress&cs=tinysrgb&w=800'
              alt=''
              fill
              sizes='20vw'
              className={categoryListImage}
            />
          </div>
          <h1 className={categoryName}>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className={categoryListLink}>
          <div className={categoryListImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/33393/caudata-strelitzia-bird-of-paradise-flower-strelitzia-orchids.jpg?auto=compress&cs=tinysrgb&w=800'
              alt=''
              fill
              sizes='20vw'
              className={categoryListImage}
            />
          </div>
          <h1 className={categoryName}>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className={categoryListLink}>
          <div className={categoryListImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/33393/caudata-strelitzia-bird-of-paradise-flower-strelitzia-orchids.jpg?auto=compress&cs=tinysrgb&w=800'
              alt=''
              fill
              sizes='20vw'
              className={categoryListImage}
            />
          </div>
          <h1 className={categoryName}>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className={categoryListLink}>
          <div className={categoryListImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/33393/caudata-strelitzia-bird-of-paradise-flower-strelitzia-orchids.jpg?auto=compress&cs=tinysrgb&w=800'
              alt=''
              fill
              sizes='20vw'
              className={categoryListImage}
            />
          </div>
          <h1 className={categoryName}>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className={categoryListLink}>
          <div className={categoryListImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/33393/caudata-strelitzia-bird-of-paradise-flower-strelitzia-orchids.jpg?auto=compress&cs=tinysrgb&w=800'
              alt=''
              fill
              sizes='20vw'
              className={categoryListImage}
            />
          </div>
          <h1 className={categoryName}>Category Name</h1>
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
