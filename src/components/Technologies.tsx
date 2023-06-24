import { paths } from '@/constants'
import chroma from 'chroma-js'

export default function Technologies() {
  return (
    <ul className='mt-4 flex w-full flex-wrap gap-3 p-1 md:gap-4'>
      {paths.map(({ name, color, path, link }) => {
        return (
          <li
            key={name}
            className='color-accent h-fit w-fit rounded-lg ring-2 transition-all hover:cursor-pointer hover:ring-2 hover:ring-offset-2'
            style={{
              color: `${chroma(color)
                .set('hsv.s', '*0.9')
                .set('hsv.v', '0.55')}`,
              backgroundColor: `${color}15`,
              //@ts-ignore
              '--tw-ring-color': `${color}20`,
            }}
          >
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex w-fit items-center gap-2 whitespace-nowrap px-2 py-1 font-mono text-xs md:text-sm [&>svg]:h-4'
            >
              <svg
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>{name}</title>
                <path fill={color} d={path} />
              </svg>
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
