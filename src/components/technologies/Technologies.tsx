import paths from './paths'
import chroma from 'chroma-js'

export default function Technologies() {
  return (
    <ul className='mt-4 p-1 flex flex-wrap gap-3 md:gap-4 w-full'>
      {paths.map(({ name, color, path, link }) => {
        return (
          <li
            key={name}
            className='h-fit w-fit transition-all color-accent ring-2 hover:ring-2 rounded-lg hover:ring-offset-2 hover:cursor-pointer'
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
              className='whitespace-nowrap [&>svg]:h-4 flex gap-2 items-center w-fit px-2 py-1 text-xs md:text-sm font-mono'
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
