import Logo from './Logo'
import SideDrawer from './SideDrawer'

export default function Header() {
  return (
    <header className='relative z-[1000] flex h-16 w-full items-center justify-between p-6 md:fixed md:left-0 md:top-0 md:h-20 md:p-12'>
      <Logo />

      <SideDrawer />
    </header>
  )
}
