import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Home from '@/components/home/Home'
import Projects from '@/components/projects/Projects'
import Projects2 from '@/components/projects/Projects2'

export default function Index() {
  return (
    <>
      <Home />
      <About />
      {/* <Projects /> */}
      <Projects2 />
      <Contact />
    </>
  )
}
