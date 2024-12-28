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
} from './Styles/CategoryListStyle'
import { wixClientServer } from '@/lib/wixClientServer'

const CategoryList = async () => {
  const wixClient = await wixClientServer()
  const cats = await wixClient.collections.queryCollections().find()

  return (
    <div className={categoryListContainer}>
      <div className={categoryListLinkWrapper}>
        {cats.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className={categoryListLink}
            key={item._id}
          >
            <div className={categoryListImageWrapper}>
              <Image
                src={item.media?.mainMedia?.image?.url || '/cat.png'}
                alt=''
                fill
                sizes='20vw'
                className={categoryListImage}
              />
            </div>
            <h1 className={categoryName}>{item.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
