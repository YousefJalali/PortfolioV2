import { ProjectType } from '@/data'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function ProjectDescription({
  project,
}: {
  project: ProjectType
}) {
  // const sectionRef = useRef<HTMLDivElement>(null)
  // const isInView = useInView(sectionRef, { once: true })

  return (
    <article
      key={project.title}
      className='mb-12 md:mb-0 w-full max-w-none z-20 bg-base-200 shadow-2xl'
    >
      <Image
        src={project.img}
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
    </article>
  )
}
