import { ProjectType } from '@/constants'
import Image from 'next/image'

export default function ProjectDescription({
  project,
}: {
  project: ProjectType
}) {
  return (
    <article
      key={project.title}
      className='z-20 mb-12 w-full bg-base-100 md:mb-0 md:bg-transparent'
    >
      <Image
        src={project.img}
        alt={project.title}
        width={1180}
        height={818}
        className='mx-auto object-cover w-full max-w-md bg-base-200 md:hidden mb-4 md:mb-0'
      />
      <div className='md:prose-md prose prose-sm flex max-w-none flex-col md:items-end md:justify-end md:text-right'>
        <span className='byline text-xs'>{project.usedTechs}</span>

        <h1 className='mb-0 mt-1'>{project.title}</h1>
        <p className='md:bg-base-200 md:w-[120%] md:p-6 md:shadow-lg'>
          {project.description}
        </p>

        {/* links */}
        <div className='flex gap-4 transition-all md:justify-end [&>a>svg]:h-5 [&>a>svg]:hover:cursor-pointer hover:[&>a>svg]:stroke-primary [&>a]:text-neutral'>
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
