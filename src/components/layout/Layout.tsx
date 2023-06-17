import { ReactNode } from 'react'
import { Inter, Fira_Code } from 'next/font/google'
import Pagination from './Pagination'
import Header from './Header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={`${inter.variable} ${firaCode.variable} font-sans`}>
      {/* <aside className='fixed top-0 left-0 w-40 h-full flex justify-center items-end'>
        <span>github</span>
      </aside> */}

      {children}

      {/* <Header /> */}

      {/* <footer className='absolute bottom-0 left-0 w-full h-fit text-center p-12 byline text-neutral'>
          Designed & Built by Yousef Jalali
        </footer> */}

      {/* <aside className='hidden md:flex fixed top-0 right-0 w-40 h-full justify-end items-end -z-1'>
        <Pagination />
      </aside> */}
    </main>
  )
}
