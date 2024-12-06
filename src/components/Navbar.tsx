import Link from 'next/link'
import { logo } from './NavStyle'
import Menu from './Menu'
const Navbar = () => {
  return (
    <div className={logo}>
      {/* MOBILE */}
      <Link href={'/'}>NoiShop</Link>
      <Menu />
    </div>
  )
}

export default Navbar
