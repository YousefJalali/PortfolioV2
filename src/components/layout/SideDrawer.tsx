import { sections } from '@/utils'
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
    <div className='fixed left-0 top-0 z-40 h-screen w-screen bg-base-100'>
      <motion.ul
        className='flex h-full flex-col items-center justify-center gap-12'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {sections.map((item, i) => (
          <motion.li key={item} variants={child}>
            <a
              className={`flex gap-1 text-3xl font-bold transition-all hover:text-primary ${
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
