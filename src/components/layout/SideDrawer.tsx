import { sectionList } from '@/data'
import { Variants, motion } from 'framer-motion'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export default function SideDrawer({
  toggleDrawer,
}: {
  toggleDrawer: Dispatch<SetStateAction<boolean>>
}) {
  const [hash, setHash] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      const hashValue = window.location.hash.substring(1)
      setHash(hashValue)
    }

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange)

    // Call handleHashChange manually on initial render
    handleHashChange()

    // Remove event listener on cleanup
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: i * 0 },
    }),
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: -40,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 200,
      },
    },
  }

  return (
    <div className='fixed top-0 left-0 h-screen w-screen z-40 bg-base-100'>
      <motion.ul
        className='flex flex-col gap-12 h-full justify-center items-center'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {sectionList.map((item, i) => (
          <motion.li key={item} variants={child}>
            <a
              className={`flex gap-1 hover:text-primary transition-all text-3xl font-bold ${
                hash === item.toLowerCase() ? 'text-primary' : ''
              }`}
              href={`#${item.toLowerCase()}`}
              onClick={() => toggleDrawer(false)}
            >
              {item}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
