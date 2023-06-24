import { sectionsWithProjects } from '@/constants'

const PageNumber = () => {
  return (
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
  )
}

export default PageNumber
