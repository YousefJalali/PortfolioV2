import { useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import SideDrawer from './SideDrawer'

export default function Header() {
  const [drawer, toggleDrawer] = useState(false)

  return (
    <>
      <header className='w-full h-16 md:h-20 bg-gradient-to-b from-base-100 from-60% to-transparent flex p-6 md:p-12 justify-between items-center fixed left-0 top-0 z-50'>
        <Logo />
        <Nav />

        <a
          onClick={() => toggleDrawer((prevState) => !prevState)}
          className='lg:hidden'
        >
          {drawer ? (
            <svg
              className='fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
            </svg>
          ) : (
            <svg
              className='fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
            </svg>
          )}
        </a>
      </header>

      {drawer && <SideDrawer toggleDrawer={toggleDrawer} />}
    </>
  )
}
