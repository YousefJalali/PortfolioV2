import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import About from '@/components/about/About'
import Home from '@/components/home/Home'
import { useMedia } from '@/libs/hooks'
import Contact from '@/components/contact/Contact'
import { projectsData } from '@/data'
import ProjectDescription from '@/components/projects/ProjectDescription'
import Image from 'next/image'

const SECTIONS = [
  'home',
  'about',
  ...new Array(projectsData.length).fill(0).map((p, i) => `project${i}`),
  'contact',
]

const App = () => {
  const app = useRef<HTMLDivElement>(null)
  const isMobile = useMedia('(max-width: 768px)')

  useLayoutEffect(() => {
    if (isMobile) return

    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context((context) => {
      let sections: HTMLElement[] = gsap.utils.toArray('.section')
      let currentIndex = 0
      let animating = false

      const goToSection = (index = 0, direction: number) => {
        if (index >= SECTIONS.length || index < 0 || animating) return

        animating = true

        let tl = gsap.timeline({
          defaults: { duration: 1.25, ease: 'power1.inOut' },
          onComplete: () => {
            currentIndex = index
            animating = false
          },
        })

        tl.add('anim_start', '+=0')
          .to(
            sections[currentIndex],
            {
              yPercent: -100 * direction,
            },
            'anim_start'
          )
          .fromTo(
            sections[index],
            { yPercent: 100 * direction },
            { yPercent: 0, zIndex: 100 },
            'anim_start'
          )

        if (
          sections[currentIndex].id.includes('project') &&
          sections[index].id.includes('project')
        ) {
          gsap
            .timeline({
              defaults: { duration: 1.25, ease: 'power1.inOut' },
            })
            .add('image_anim_start', '+=0')
            .to(
              `.image${sections[currentIndex].id.replace('project', '')}`,
              {
                xPercent: -100 * direction,
              },
              'anim_start'
            )
            .fromTo(
              `.image${sections[index].id.replace('project', '')}`,
              { xPercent: 100 * direction },
              { xPercent: 0, zIndex: 100 },
              'image_anim_start'
            )
        }
      }

      ScrollTrigger.observe({
        target: app.current, // can be any element (selector text is fine)
        type: 'wheel,touch,scroll', // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
        onUp: () => goToSection(currentIndex - 1, -1),
        onDown: () => goToSection(currentIndex + 1, 1),
        preventDefault: true,
      })
    }, app)

    return () => ctx.revert()
  }, [isMobile])

  return (
    <main ref={app} className='h-screen'>
      <section id='home' className='section z-10'>
        <Home />
      </section>

      <section id='about' className='section'>
        <About />
      </section>

      <div className='z-[9] relative bg-base-100 md:h-screen w-full md:w-[calc(100vw-12rem)] md:mx-24 md:overflow-hidden'>
        <div className='px-6 mt-24 md:hidden prose prose-sm md:prose-base max-w-none'>
          <span className='byline'>Projects</span>
          <h1>My Digital Creations</h1>
        </div>

        {/* IMAGES */}
        <div className='sticky top-[calc(70vh/4)] w-1/2 h-[70vh] hidden md:block'>
          <div className='absolute top-[-5rem] prose prose-base max-w-none'>
            <span className='byline'>Projects</span>
            <h1>My Digital Creations</h1>
          </div>

          {projectsData.map((project, i) => (
            <div
              key={project.title}
              className={`h-full w-full absolute top-0 bg-base-200 px-4 image${i} ${
                i === 0 ? 'z-[200]' : ''
              }`}
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
        </div>
        {projectsData.map((project, i) => (
          <section
            id={`project${i}`}
            key={project.title}
            className='section h-fit md:h-screen w-full md:w-fit flex items-center bg-base-100 left-1/2'
          >
            <div className='w-full md:w-[calc(50vw-6rem)] h-1/2 flex flex-col justify-center md:p-12'>
              <ProjectDescription project={project} />
            </div>
          </section>
        ))}
      </div>

      <section id='contact' className='section'>
        <Contact />
      </section>
    </main>
  )
}
export default App
