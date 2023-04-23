import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ProjectType } from '@/data'

export default function ProjectShowcase({
  projectsData,
}: {
  projectsData: ProjectType[]
}) {
  const [imgContainerWidth, setImgContainerWidth] = useState(500)

  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true })

  const imgContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (imgContainerRef.current) {
      setImgContainerWidth(
        (imgContainerRef.current.children[0] as HTMLDivElement).offsetWidth
      )
    }
  }, [])

  const { scrollYProgress } = useScroll({
    container: sectionRef,
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -imgContainerWidth * (projectsData.length - 1)]
  )

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div
      ref={sectionRef}
      className='hidden md:block sticky top-0 left-0 h-0 w-full'
    >
      <div className='h-screen grid pt-28'>
        <div className='relative w-full'>
          <span className='byline text-sm md:text-base'>Projects</span>
          <h1
            className='section-title w-fit relative'
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            Some Things I’ve Built.
            <motion.span
              className='absolute -bottom-1 md:-bottom-4 left-0 h-1 md:h-2 w-full bg-accent origin-left'
              style={{ scaleX }}
            />
          </h1>
        </div>

        <div
          className='h-fit w-[60vw] lg:w-[50vw] bg-base-300 overflow-hidden'
          style={{
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s ease-in 1s',
          }}
        >
          <motion.div
            ref={imgContainerRef}
            id='img-carousel'
            className='flex h-full w-fit relative'
            style={{ x }}
          >
            {projectsData.map((project) => (
              <div
                key={project.title}
                className='h-full w-screen md:w-[60vw] lg:w-[50vw] px-6'
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={1180}
                  height={818}
                  className='h-full w-full object-contain'
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
