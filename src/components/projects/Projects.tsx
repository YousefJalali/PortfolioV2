import { projectsData } from '@/data'
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { useMedia } from '@/libs/hooks'

export default function Projects() {
  const [imgContainerWidth, setImgContainerWidth] = useState(500)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true })

  const { scrollYProgress } = useScroll({
    container: sectionRef,
  })

  const imgContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (imgContainerRef.current) {
      setImgContainerWidth(
        (imgContainerRef.current.children[0] as HTMLDivElement).offsetWidth
      )
    }
  }, [])

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

  const isMobile = useMedia('(max-width: 768px)')

  return (
    <>
      <div
        id={isMobile ? 'projects' : undefined}
        className='px-6 mb-6 pt-16 md:hidden'
      >
        <span className='byline text-sm md:text-base'>Projects</span>
        <h1
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='section-title w-fit relative'
        >
          Some Things I’ve Built.
        </h1>
      </div>
      <section
        ref={sectionRef}
        id={isMobile ? undefined : 'projects'}
        className='flex gap-6 md:block px-6 w-screen relative overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll h-screen snap-x snap-mandatory [&>article]:snap-center [&>article]:snap-always md:snap-y'
      >
        <div className='hidden md:block sticky top-0 left-0 h-0 w-full'>
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
                      src={(project.img as StaticImageData).src}
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

        {/* <div className={`relative bg-primary w-full md:hidden`}>
          <span className='byline text-sm md:text-base'>Projects</span>
          <h1 className='section-title w-fit relative'>
            Some Things I’ve Built.
          </h1>
        </div> */}

        {projectsData.map((project, i, arr) => (
          <article
            key={project.title}
            className='flex flex-col md:justify-center md:items-end h-screen w-full'
            style={{
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s ease-in 1s',
            }}
          >
            <div
              key={project.title}
              className='mb-12 md:mb-0 w-[calc(100vw-4.5rem)] overflow-hidden md:w-1/2 max-w-none z-20 bg-base-200 shadow-2xl'
            >
              <Image
                src={(project.img as StaticImageData).src}
                alt={project.title}
                width={1180}
                height={818}
                className='px-4 w-full max-w-md object-contain md:hidden mx-auto bg-base-300'
              />
              <div className='p-4 md:p-6 prose prose-sm md:prose-md'>
                <span className='byline text-xs'>{project.usedTechs}</span>
                {/* <span className='byline'>{project.status}</span> */}
                <h1 className='mb-0'>{project.title}</h1>
                <p className='my-3'>{project.description}</p>

                {/* links */}
                <div className='mt-4 [&>a>svg]:h-5 [&>a]:text-neutral flex gap-4 hover:[&>a>svg]:stroke-primary [&>a>svg]:hover:cursor-pointer transition-all'>
                  <a
                    href={project.links.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      role='img'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <title>GitHub</title>
                      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                    </svg>
                  </a>

                  {project.links.appLink && (
                    <a
                      href={project.links.appLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        role='img'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <title>External Link</title>
                        <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                        <polyline points='15 3 21 3 21 9'></polyline>
                        <line x1='10' y1='14' x2='21' y2='3'></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
