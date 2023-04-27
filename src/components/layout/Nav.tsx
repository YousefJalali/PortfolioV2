import { sectionList } from '@/data'
import { Variants, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function accumulateArray(arr: number[]) {
  let sum = 0
  return arr.reduce((output: number[], current, i) => {
    sum += current + (i === 0 ? 0 : 32)
    output.push(sum)
    return output
  }, [])
}

export default function Nav() {
  const [childrenWidth, setChildrenWidth] = useState<number[]>(
    new Array(sectionList.length).fill(0)
  )
  const { scrollYProgress } = useScroll()

  const navRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (navRef.current) {
      const children = navRef.current.children
      let arr: number[] = []

      let offsetWidth = []
      let scrollWidth = []
      let clientWidth = []
      for (let i = 0; i < children.length; i++) {
        offsetWidth.push((children[i] as HTMLLIElement).offsetWidth)
        scrollWidth.push((children[i] as HTMLLIElement).scrollWidth)
        clientWidth.push((children[i] as HTMLLIElement).clientWidth)

        arr.push((children[i] as HTMLLIElement).offsetWidth)
      }
      arr.pop()
      arr.unshift(0)
      setChildrenWidth([...arr])

      console.log('offsetWidth', offsetWidth)
      console.log('scrollWidth', scrollWidth)
      console.log('clientWidth', clientWidth)
    }
  }, [])

  const pagesOffset = sectionList.map((_, i, arr) =>
    i === 0 ? 0 : i / (arr.length - 1)
  )

  const x = useTransform(
    scrollYProgress,
    pagesOffset,
    accumulateArray(childrenWidth)
  )

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
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <nav className='items-center relative hidden lg:flex'>
      {/* <motion.div
        className='absolute -bottom-1 left-0 h-1 w-[19.2px] bg-primary'
        style={{ x }}
        variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
        initial='hidden'
        animate='visible'
        transition={{ delay: 0.25 }}
      /> */}
      <motion.ul
        ref={navRef}
        className='flex gap-[32px]'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        {sectionList.map((item, i) => (
          <motion.li key={item} variants={child}>
            <a
              className='flex gap-1 hover:text-primary transition-all'
              href={`#${item.toLowerCase()}`}
            >
              <span className='byline'>0{i + 1}.</span>
              {item}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  )
}
