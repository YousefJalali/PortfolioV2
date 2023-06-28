import Logo from './Logo'
import SideDrawer from './SideDrawer'

export default function Header() {
  return (
    <header className='slide-down absolute z-[1000] flex h-10 w-full items-center justify-between p-6 py-11 md:fixed md:left-0 top-0 md:h-20 md:p-12'>
      <Logo />

      <SideDrawer />
    </header>
  )
}
