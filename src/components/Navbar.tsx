import Link from 'next/link'
import {
  navLogo,
  navMobile,
  navMenuSize,
  navMain,
  navMainLeft,
  navMainRight,
  navLogoImage,
} from './NavStyle'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'
const Navbar = () => {
  return (
    <div className={navMenuSize}>
      <div className={navMobile}>
        {/* MOBILE */}
        <Link href={'/'}>
          <div className={navLogo}>NOISHOP</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREEN */}
      <div className={navMain}>
        {/* LEFT */}
        <div className={navMainLeft}>
          <Link href='/' className={navLogoImage}>
            <Image src='/logo.png' alt='' width={24} height={24} />
            <div className={navLogo}>NOI_SHOP</div>
          </Link>
        </div>
        {/* RIGHT */}
        <div className={navMainRight}>
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar
