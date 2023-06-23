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
import Header from '@/components/layout/Header'
import { sections, sectionsWithProjects } from '@/utils'

const EASE = { duration: 1, ease: 'power2.inOut' }

const App = () => {
  const app = useRef<HTMLDivElement>(null)
  const isMobile = useMedia('(max-width: 768px)')

  useLayoutEffect(() => {
    if (isMobile) return

    gsap.registerPlugin(ScrollTrigger)

    let pagination: HTMLElement[] = gsap.utils.toArray('.pagination')
    let navLinks: HTMLElement[] = gsap.utils.toArray('.nav-link')
    let currentIndex = 0
    let animating = false

    let ctx = gsap.context((context) => {
      let sections: HTMLElement[] = gsap.utils.toArray('.section')

      //initializations
      projectsData.forEach((p, i) => {
        gsap.set(`.project${i}`, { yPercent: 100 })
        gsap.set(`.image${i}`, { xPercent: 100 })
      })
      gsap.set(pagination[0], {
        transform: 'rotate(45deg) scale(1.5)',
        borderWidth: 1,
      })

      function animateProjects(index: number, direction: number) {
        let currentImgIndex = sections[currentIndex].id.replace('project', '')
        let nextImgIndex = sections[index].id.replace('project', '')

        // fix first and last image
        if (currentImgIndex.length > 1) {
          if (+nextImgIndex === projectsData.length - 1) {
            currentImgIndex = `${projectsData.length - 1}`
          } else {
            currentImgIndex = '0'
          }
        }

        gsap
          .timeline({
            defaults: EASE,
          })
          .add('image_anim_start', '+=0')
          .to(
            `.image${currentImgIndex}`,
            {
              xPercent: -100 * direction,
            },
            'anim_start'
          )
          .fromTo(
            `.image${nextImgIndex}`,
            { xPercent: 100 * direction },
            { xPercent: 0, zIndex: 100 },
            'image_anim_start'
          )
      }

      function animatePagination(i: number, dir: number) {
        let currentSectionIndex = currentIndex
        let nextSectionIndex = i

        gsap
          .timeline({
            defaults: { duration: 0.25, ease: 'power1.inOut' },
          })
          .add('pagination_anim_start', '+=0')
          .to(
            pagination[nextSectionIndex],
            {
              transform: `rotate(${dir * 45}deg) scale(1.5)`,
              borderWidth: 1,
            },
            'pagination_anim_start'
          )
          .to(
            pagination[currentSectionIndex],
            {
              transform: 'rotate(0) scale(1)',
              borderWidth: 4,
            },
            'pagination_anim_start'
          )
      }

      function animatePageNumbers(index: number, direction: number) {
        gsap
          .timeline({
            defaults: EASE,
          })
          .add('page_number_anim_start', '+=0')
          .to(
            '.page-number',
            {
              yPercent: (-100 / sections.length) * index,
            },
            'page_number_anim_start'
          )
        // .fromTo(
        //   '.page-number',
        //   { yPercent: 100 * direction },
        //   { yPercent: 0, zIndex: 100 },
        //   'page_number_anim_start'
        // )
      }

      function goToSection(index = 0, direction: number) {
        if (index >= sectionsWithProjects.length || index < 0 || animating)
          return

        animating = true

        let tl = gsap.timeline({
          defaults: EASE,
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

        animatePagination(index, direction)

        animateProjects(index, direction)

        animatePageNumbers(index, direction)
      }

      context.add('goToSection', (e: PointerEvent, i: number) => {
        if (i === currentIndex || animating) return

        let index = i
        let dir = currentIndex > index ? -1 : 1

        goToSection(index, dir)
      })

      ScrollTrigger.observe({
        target: app.current,
        type: 'wheel,touch,scroll',
        onUp: () => goToSection(currentIndex - 1, -1),
        onDown: () => goToSection(currentIndex + 1, 1),
        preventDefault: true,
      })
    }, app)

    pagination.forEach((el, i) => {
      ;(el as HTMLDivElement).addEventListener('click', (e) =>
        ctx.goToSection(e, i)
      )
    })

    navLinks.forEach((el) => {
      ;(el as HTMLDivElement).addEventListener('click', (e) => {
        let index = sections.indexOf(el.id.replace('nav-', ''))

        // if el is contact
        if (index === 3) index = sectionsWithProjects.length - 1
        ctx.goToSection(e, index)
      })
    })

    return () => {
      ctx.revert()

      pagination.forEach((el, i) => {
        ;(el as HTMLDivElement).removeEventListener('click', (e) =>
          ctx.goToSection(e, i)
        )
      })

      navLinks.forEach((el, i) => {
        ;(el as HTMLDivElement).removeEventListener('click', (e) =>
          ctx.goToSection(e, i)
        )
      })
    }
  }, [isMobile])

  return (
    <main ref={app} className='relative h-screen'>
      <Header />

      <div className='z-100 fixed right-12 top-1/2 hidden -translate-y-1/2 transform space-y-6 md:block'>
        {sectionsWithProjects.map((sec, i) => (
          <div
            id={`section_${i}`}
            key={sec}
            className={`pagination h-[8px] w-[8px] cursor-pointer border-4 border-neutral hover:border-primary`}
          />
        ))}
      </div>

      <div className='fixed bottom-12 right-12 hidden md:block'>
        <div className='absolute bottom-0 right-0 flex h-[48px] overflow-hidden font-mono text-[48px] font-bold leading-none md:h-[96px] md:text-[96px]'>
          <span className='relative flex items-center'>
            <span>0</span>
            <span className='opacity-0'>0</span>
            <span className='page-number absolute right-0 top-0'>
              {sectionsWithProjects.map((sec, i) => (
                <span key={sec} className='block h-full w-full bg-base-100'>
                  {i + 1}
                </span>
              ))}
            </span>
          </span>
        </div>
      </div>

      <section id='home' className='section z-10'>
        <Home />
      </section>

      <section id='about' className='section'>
        <About />
      </section>

      <div
        id='projects'
        className='relative z-[9] w-full bg-base-100 md:mx-48 md:h-screen md:w-[calc(100vw-24rem)] md:overflow-hidden'
      >
        <div className='prose prose-sm mt-24 max-w-none px-6 md:prose-base md:mt-0 md:hidden'>
          <span className='byline'>Projects</span>
          <h1>My Digital Creations</h1>
        </div>

        {/* IMAGES */}
        <div className='sticky top-[calc(70vh/4)] hidden h-[70vh] w-[60%] overflow-hidden md:block'>
          <div className='prose prose-base absolute top-0 max-w-none'>
            <span className='byline'>Projects</span>
            <h1>My Digital Creations</h1>
          </div>

          {projectsData.map((project, i) => (
            <div
              key={project.title}
              className={`absolute top-[6rem] h-[calc(100%-6rem)] w-full bg-base-200 px-4 image${i}`}
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

        {/* DESCRIPTION */}
        {projectsData.map((project, i) => (
          <section
            id={`project${i}`}
            key={project.title}
            className={`project${i} section mx-0 flex h-fit w-full items-center overflow-visible bg-transparent md:left-auto md:right-48 md:h-screen md:w-[30%]`}
          >
            <div className='flex h-1/2 w-full flex-col justify-center md:w-full'>
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
