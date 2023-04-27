import { sectionList } from '@/data'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Pagination() {
  const [eleHeight, setEleHeight] = useState(96)
  const { scrollYProgress } = useScroll()

  const numberRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (numberRef.current) {
      setEleHeight(numberRef.current.offsetHeight)
    }
  }, [])

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -eleHeight * (sectionList.length - 1)]
  )

  return (
    <div className='mb-6 mr-6 relative'>
      <div className='sticky bottom-0 text-[48px] h-[48px] md:text-[96px] md:h-[96px] right-0 flex font-bold font-mono leading-none overflow-hidden'>
        <span ref={numberRef}>0</span>
        <motion.span className='flex flex-col items-center' style={{ y }}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </motion.span>
      </div>
      <div className='absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 opacity-20 text-[48px] h-[48px] md:text-[96px] md:h-[96px] flex font-bold font-mono leading-none overflow-hidden'>
        <span ref={numberRef}>0</span>
        <motion.span className='flex flex-col items-center' style={{ y }}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </motion.span>
      </div>
    </div>
  )
}
