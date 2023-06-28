import { projectsData } from '@/constants'
import ProjectDescription from '../ProjectDescription'
import Image from 'next/image'

const Projects = () => {
  return (
    <>
      <div className='prose prose-sm mt-24 pt-10 max-w-none px-6 md:prose-base md:mt-0 md:pt-0 md:hidden'>
        <span className='byline'>Projects</span>
        <h1>My Digital Creations</h1>
      </div>

      {/* IMAGES */}
      <div className='sticky top-[calc(70vh/4)] hidden h-[70vh] w-[60%] overflow-hidden lg:block'>
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
    </>
  )
}

export default Projects
