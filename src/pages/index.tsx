import { useLayoutEffect, useRef } from 'react'
import { Fira_Code, Inter } from 'next/font/google'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { sections, sectionsWithProjects, projectsData } from '@/constants'
import Header from '@/components/layout/Header'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Projects from '@/components/pages/Projects'
import Contact from '@/components/pages/Contact'
import { useMedia } from '@/hooks'
import ScrollIndicator from '@/components/ScrollIndicator'
import PageNumber from '@/components/PageNumber'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

const EASE = { duration: 1, ease: 'power2.inOut' }

const App = () => {
  const app = useRef<HTMLDivElement>(null)
  const isMobile = useMedia('(max-width: 768px)')

  useLayoutEffect(() => {
    if (isMobile) return

    gsap.registerPlugin(ScrollTrigger)

    gsap.config({
      nullTargetWarn: false,
    })

    let slideUp: HTMLElement[] = gsap.utils.toArray('.slide-up')
    let pagination: HTMLElement[] = gsap.utils.toArray('.pagination')
    let navLinks: HTMLElement[] = gsap.utils.toArray('.nav-link')
    let currentIndex = 0
    let animating = false

    let ctx = gsap.context((context) => {
      let sections: HTMLElement[] = gsap.utils.toArray('.section')

      //initializations--------------------------
      //header
      gsap.from('.slide-down', {
        yPercent: -200,
        ease: 'Power.easeInOut',
        opacity: 0,
        duration: 0.6,
        stagger: 0.3,
      })

      //pagination
      gsap.set(pagination[0], {
        transform: 'rotate(45deg) scale(1.5)',
        borderWidth: 1,
      })
      pagination.forEach((ele, i) => {
        gsap
          .timeline({
            defaults: EASE,
            delay: 0.5,
          })
          .add('pagination_anim')
          .from(
            ele,
            {
              x: 24,
              ease: 'Power2.easeOut',
              opacity: 0,
              duration: 0.1,
              stagger: 0.3,
            },
            `pagination_anime+=${i / 24}`
          )
      })

      //page number
      gsap.from('.page-number-container', { x: 200, opacity: 0, delay: 0.8 })

      //home
      slideUp.forEach((ele, i) => {
        gsap
          .timeline({
            defaults: EASE,
            delay: 1.1,
          })
          .add('home_anim')
          .from(
            ele,
            {
              yPercent: 24,
              ease: 'Power.easeInOut',
              opacity: 0,
              duration: 0.6,
              stagger: 0.3,
            },
            `home_anime+=${i / 9}`
          )
      })

      projectsData.forEach((p, i) => {
        gsap.set(`.project${i}`, { yPercent: 100 })
        gsap.set(`.image${i}`, { xPercent: 100 })
      })
      //---------------------------

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
    <main
      ref={app}
      className={`relative h-screen ${inter.variable} ${firaCode.variable} font-sans`}
    >
      <Header />

      <ScrollIndicator />

      <PageNumber />

      <section id='home' className='section z-10'>
        <Home />
      </section>

      <section id='about' className='section'>
        <About />
      </section>

      <section
        id='projects'
        className='relative z-[9] w-full bg-base-100 md:mx-48 md:h-screen md:w-[calc(100vw-24rem)] md:overflow-hidden'
      >
        <Projects />
      </section>

      <section id='contact' className='section'>
        <Contact />
      </section>
    </main>
  )
}
export default App
