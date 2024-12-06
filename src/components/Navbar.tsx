import Link from 'next/link'
import { navLogo, navMain, navSize } from './NavStyle'
import Menu from './Menu'
const Navbar = () => {
  return (
    <div className={navSize}>
      <div className={navMain}>
        {/* MOBILE */}
        <Link href={'/'} className={navLogo}>
          NOISHOP
        </Link>
        <Menu />
      </div>
    </div>
  )
}

export default Navbar
