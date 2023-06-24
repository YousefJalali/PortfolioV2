import { sectionsWithProjects } from '@/constants'

const ScrollIndicator = () => {
  return (
    <div className='z-100 fixed right-12 top-1/2 hidden -translate-y-1/2 transform space-y-6 md:block'>
      {sectionsWithProjects.map((sec, i) => (
        <div
          id={`section_${i}`}
          key={sec}
          className={`pagination h-[8px] w-[8px] cursor-pointer border-4 border-neutral hover:border-primary`}
        />
      ))}
    </div>
  )
}

export default ScrollIndicator
