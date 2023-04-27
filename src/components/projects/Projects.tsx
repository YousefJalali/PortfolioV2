import { projectsData } from '@/data'
import { useInView, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { useMedia } from '@/libs/hooks'
import ProjectDescription from './ProjectDescription'
import ProjectShowcase from './ProjectShowcase'

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true })

  const isMobile = useMedia('(max-width: 768px)')

  const { scrollYProgress } = useScroll({
    container: sectionRef,
  })

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
        className='section max-w-none [&>article]:max-w-7xl [&>article]:mx-auto flex gap-6 md:block px-6 w-screen relative overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll h-screen snap-x snap-mandatory [&>article]:snap-center [&>article]:snap-always md:snap-y '
      >
        {!isMobile && (
          <ProjectShowcase
            scrollYProgress={scrollYProgress}
            projectsData={projectsData}
          />
        )}

        {projectsData.map((project, i, arr) => (
          <ProjectDescription key={project.title} project={project} />
        ))}
      </section>
    </>
  )
}
