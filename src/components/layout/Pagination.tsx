import { sections } from '@/utils'
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
    [0, -eleHeight * (sections.length - 1)]
  )

  return (
    <div className='relative mb-6 mr-6'>
      <div className='sticky bottom-0 right-0 flex h-[48px] overflow-hidden font-mono text-[48px] font-bold leading-none md:h-[96px] md:text-[96px]'>
        <span ref={numberRef}>0</span>
        <motion.span className='flex flex-col items-center' style={{ y }}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </motion.span>
      </div>
      <div className='absolute -bottom-2 -right-2 flex h-[48px] overflow-hidden font-mono text-[48px] font-bold leading-none opacity-20 md:-bottom-4 md:-right-4 md:h-[96px] md:text-[96px]'>
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
