'use client'

import Image from 'next/image'
import {
  logout,
  navbarIconCart,
  navbarIconCartAmount,
  navbarIconNotification,
  navbarIconProfile,
  navbarIcons,
  profileMenu,
} from './NavStyle'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CartModal from './CartModal'

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const router = useRouter()

  // TEMPORARY
  // create isLoggedIn for temporary use only because we don't have the authentication yet
  const isLoggedIn = false

  const handleProfile = () => {
    if (!isLoggedIn) {
      // if user is not login -- redirect to the loging page
      router.push('/login')
    }
    // if user login -- redirect to profile
    setIsProfileOpen((prev) => !prev)
  }
  return (
    <div className={navbarIcons}>
      <Image
        src='/profile.png'
        alt=''
        width={22}
        height={22}
        className={navbarIconProfile}
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className={profileMenu}>
          <Link href='/'>Profile</Link>
          <div className={logout}>Logout</div>
        </div>
      )}
      <Image
        src='/notification.png'
        alt=''
        width={22}
        height={22}
        className={navbarIconNotification}
      />
      <div className={navbarIconCart}>
        <Image
          src='/cart.png'
          alt=''
          width={22}
          height={22}
          // className={navbarIconCart}
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className={navbarIconCartAmount}>2</div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  )
}

export default NavIcons
