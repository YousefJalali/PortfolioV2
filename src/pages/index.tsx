import { gsap } from 'gsap'
import { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { Observer } from 'gsap/dist/Observer'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import About from '@/components/about/About'
import Home from '@/components/home/Home'
import { useWindowSize } from '@/libs/hooks'
import Projects from '@/components/projects/Projects'
import Contact from '@/components/contact/Contact'
import Projects2 from '@/components/projects/Projects2'

const SECTIONS = [
  <Home key='home' />,
  <About key='about' />,
  <Projects key='projects' />,
  <Contact key='contact' />,
]
const Section = ({
  children,
  style,
}: {
  children: ReactNode
  style: object
}) => (
  <section
    className='sec overflow-hidden bg-base-100 flex justify-center items-center text-4xl fixed top-6 h-[calc(100vh-3rem)] left-6 w-[calc(100%-3rem)] md:left-24 md:w-[calc(100%-12rem)]'
    style={style}
  >
    {children}
  </section>
)

const App = () => {
  // const [animating, setAnimating] = useState(false)
  // const { height } = useWindowSize()
  const app = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context((context) => {
      let sections: HTMLElement[] = gsap.utils.toArray('.sec')
      let currentIndex = 0
      let animating = false

      const goToSection = (index: number, direction: number) => {
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
            { yPercent: 0 },
            'anim_start'
          )
      }

      console.log(animating)

      ScrollTrigger.observe({
        target: app.current, // can be any element (selector text is fine)
        type: 'wheel,touch,scroll', // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
        onUp: () => goToSection(currentIndex - 1, -1),
        onDown: () => goToSection(currentIndex + 1, 1),
        preventDefault: true,
      })
    }, app)

    // gsap.registerPlugin(Observer)

    // let sections = app.current.querySelectorAll('section')
    // let images = app.current.querySelectorAll('.bg')
    // let outerWrappers = gsap.utils.toArray('.outer')
    // let innerWrappers = gsap.utils.toArray('.inner')
    // let currentIndex = -1
    // let wrap = gsap.utils.wrap(0, sections.length)
    // let animating = false

    // let ctx = gsap.context((context) => {
    //   gsap.set(outerWrappers, { yPercent: 100 })
    //   gsap.set(innerWrappers, { yPercent: -100 })

    //   context.add('gotoSection', function gotoSection(index, direction) {
    //     index = wrap(index) // make sure it's valid
    //     animating = true

    //     let fromTop = direction === -1
    //     let dFactor = fromTop ? -1 : 1
    //     let tl = gsap.timeline({
    //       defaults: { duration: 1.25, ease: 'power1.inOut' },
    //       onComplete: () => (animating = false),
    //     })

    //     if (currentIndex >= 0) {
    //       // The first time this function runs, current is -1
    //       gsap.set(sections[currentIndex], { zIndex: 0 })
    //       tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
    //         sections[currentIndex],
    //         { autoAlpha: 0 }
    //       )
    //     }
    //     gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 })
    //     tl.fromTo(
    //       [outerWrappers[index], innerWrappers[index]],
    //       {
    //         yPercent: (i) => {
    //           console.log({ i })
    //           return i ? -100 * dFactor : 100 * dFactor
    //         },
    //       },
    //       {
    //         yPercent: 0,
    //       },
    //       0
    //     )

    //     currentIndex = index
    //   })

    //   Observer.create({
    //     type: 'wheel,touch,pointer',
    //     wheelSpeed: -1,
    //     onDown: () => !animating && ctx.gotoSection(currentIndex - 1, -1),
    //     onUp: () => !animating && ctx.gotoSection(currentIndex + 1, 1),
    //     tolerance: 10,
    //     preventDefault: true,
    //   })
    // }, app)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={app} className='h-screen'>
      {SECTIONS.map((section, index) => (
        <Section key={index} style={{ zIndex: SECTIONS.length - index }}>
          {section}
        </Section>
      ))}
    </main>
  )

  return (
    <main ref={app}>
      <section className='first'>
        <div className='outer'>
          <div className='inner'>
            <div className='bg one'>
              <h2 className='section-heading'>Scroll down</h2>
            </div>
          </div>
        </div>
      </section>
      <section className='second'>
        <div className='outer'>
          <div className='inner'>
            <div className='bg'>
              <h2 className='section-heading'>Animated with GSAP</h2>
            </div>
          </div>
        </div>
      </section>
      <section className='third'>
        <div className='outer'>
          <div className='inner'>
            <div className='bg'>
              <h2 className='section-heading'>GreenSock</h2>
            </div>
          </div>
        </div>
      </section>
      <section className='fourth'>
        <div className='outer'>
          <div className='inner'>
            <div className='bg'>
              <h2 className='section-heading'>Animation platform</h2>
            </div>
          </div>
        </div>
      </section>
      <section className='fifth'>
        <div className='outer'>
          <div className='inner'>
            <div className='bg'>
              <h2 className='section-heading'>Keep scrolling</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default App

// import About from '@/components/about/About'
// import Contact from '@/components/contact/Contact'
// import Home from '@/components/home/Home'
// import Projects from '@/components/projects/Projects'
// import Projects2 from '@/components/projects/Projects2'
// import {
//   motion,
//   useAnimate,
//   useInView,
//   useMotionValue,
//   useMotionValueEvent,
//   useScroll,
//   useSpring,
//   useVelocity,
// } from 'framer-motion'
// import debounce from 'lodash.debounce'
// import { useEffect, useLayoutEffect, useRef, useState } from 'react'

// const SECTIONS = ['home', 'about', 'projects', 'contact']

// const OFFSETS = [0, 939, 1878, 2817]

// export default function Index() {
//   const [currentSection, setCurrentSection] = useState('home')
//   // const [y, setY] = useState(0)
//   const { scrollY, scrollYProgress } = useScroll()
//   const [scope, animate] = useAnimate<HTMLDivElement>()
//   const scrollVelocity = useVelocity(scrollY)
//   // const [index, setIndex] = useState(0)

//   // function moveTo(to: number) {
//   //   console.log('move to: ', to)
//   //   spring.set(window.pageYOffset, false)
//   //   setTimeout(() => {
//   //     spring.set(to)
//   //   }, 50)
//   // }

//   // useLayoutEffect(() => {
//   //   spring.on('change', (latest) => {
//   //     window.scrollTo(0, latest)
//   //   })
//   // }, [spring])

//   console.log('render')

//   function getCurrentSection(sections: HTMLCollection): HTMLElement {
//     return [...sections].find(
//       (section) => section.getAttribute('data-current') === 'true'
//     )
//   }

//   function getSectionIndex(section: HTMLElement | undefined) {
//     if (typeof section === 'undefined') return 0
//     return SECTIONS.indexOf(section.id)
//   }

//   function scroll(container: HTMLElement, direction: 'up' | 'down') {
//     console.log(`scroll ${direction}`)

//     // const curSection = getCurrentSection(container.children)
//     // const index = getSectionIndex(curSection)

//     // const maxHeight = [...scope.current.children].reduce((prev, curr) => {
//     //   return prev + curr.clientHeight
//     // }, 0)

//     const index =
//       container.getAttribute('data-index') === null
//         ? 0
//         : +container.getAttribute('data-index')

//     if (direction === 'down' && index + 1 >= OFFSETS.length) return //don't scroll if end reached
//     if (direction === 'up' && index - 1 < 0) return //don't scroll if top reached

//     let d = direction === 'up' ? -1 : 1

//     // setIndex((prevIndex) => prevIndex + d)
//     let offset = OFFSETS[index + d]

//     // window.scrollTo({
//     //   top: offset,
//     // })

//     container.setAttribute('data-index', `${index + d}`)

//     // let offset = container.children[index + d].offsetTop
//     // let adjustedOffset = offset > maxHeight - 939 ? maxHeight - 939 : offset
//     animate(container, { y: -offset }, { ease: 'easeInOut' })

//     // container.children[index].setAttribute('data-current', 'false')
//     // container.children[index + d].setAttribute('data-current', 'true')
//   }

//   // useEffect(() => {
//   //   return scrollVelocity.on('change', (latestVelocity) => {
//   //     console.log('Velocity', latestVelocity)
//   //   })
//   // }, [])

//   const debouncedScroll = debounce(scroll, 50)

//   useMotionValueEvent(scrollY, 'change', async (latest) => {
//     if (scope.current) {
//       if (latest > scrollY.prev) {
//         // debounce(() => scroll(scope.current, 'down'), 0)
//         // scroll(scope.current, 'down')
//         debouncedScroll(scope.current, 'down')
//       }
//       if (latest < scrollY.prev) {
//         // debounce(() => scroll(scope.current, 'up'), 0)
//         // scroll(scope.current, 'up')
//         debouncedScroll(scope.current, 'up')
//       }
//     }
//   })

//   return (
//     <motion.div
//       ref={scope}
//       className='overflow-hidden h-screen'
//       data-index={0}
//       // style={{ y: offsetY }}
//       // className='snap-y snap-mandatory [&>section]:snap-start [&>section]:snap-always'
//     >
//       {/* <motion.div
//         className='h-4 w-full bg-[#000] fixed top-0 left-0 z-50'
//         style={{ scaleX: scrollYProgress }}
//       /> */}
//       <section
//         id='home'
//         data-current={currentSection === 'home'}
//         className='h-screen w-full bg-primary'
//       >
//         Home
//       </section>
//       <section
//         id='about'
//         data-current={currentSection === 'about'}
//         className='h-screen w-full bg-secondary'
//       >
//         About
//       </section>
//       <section
//         id='projects'
//         data-current={currentSection === 'projects'}
//         className='h-screen w-full'
//       >
//         Projects
//       </section>
//       <section
//         id='contact'
//         data-current={currentSection === 'contact'}
//         className='h-screen w-full bg-accent'
//       >
//         Contact
//       </section>

//       {/* <Home />
//       <About /> */}
//       {/* <Projects /> */}
//       {/* <Projects2 />
//       <Contact /> */}
//     </motion.div>
//   )
// }
