import Link from 'next/link'
import {
  navLogo,
  navMain,
  navMenuSize,
  navMenu,
  navMenuLeft,
  navMenuRight,
} from './NavStyle'
import Menu from './Menu'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className={navMenuSize}>
      <div className={navMain}>
        {/* MOBILE */}
        <Link href={'/'}>
          <div className='navLogo'>NOISHOP</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREEN */}
      <div className='navMenu'>
        {/* LEFT */}
        <div className='navMenuLeft'>
          <Link href='/'>
            <Image src='/logo.png' alt='' width={24} height={24} />
            <div className='navLogo'>NOISHOP</div>
          </Link>
        </div>
        {/* RIGHT */}
        <div className='navMenuRight'></div>
      </div>
    </div>
  )
}

export default Navbar
