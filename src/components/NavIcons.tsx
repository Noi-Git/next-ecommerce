'use client'

import Image from 'next/image'
import {
  navbarIconCart,
  navbarIconNotification,
  navbarIconProfile,
  navbarIcons,
} from './NavStyle'
import { useState } from 'react'
import Link from 'next/link'

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <div className={navbarIcons}>
      <Image
        src='/profile.png'
        alt=''
        width={22}
        height={22}
        className={navbarIconProfile}
      />
      {isProfileOpen && (
        <div className=''>
          <Link href='/'>Profile</Link>
          <div className='logout'></div>
        </div>
      )}
      <Image
        src='/notification.png'
        alt=''
        width={22}
        height={22}
        className={navbarIconNotification}
      />
      <Image
        src='/cart.png'
        alt=''
        width={22}
        height={22}
        className={navbarIconCart}
      />
    </div>
  )
}

export default NavIcons
