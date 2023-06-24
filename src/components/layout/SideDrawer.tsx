import { sections } from '@/constants'

export default function SideDrawer() {
  return (
    <div className='relative'>
      <input type='checkbox' id='nav' className='peer hidden' />

      {/* backdrop */}
      <label
        htmlFor='nav'
        className='fixed left-0 top-0 -z-10 hidden h-screen w-screen peer-checked:block'
      ></label>

      {/* open button */}
      <label
        htmlFor='nav'
        className='relative z-[2000] flex cursor-pointer flex-col items-end overflow-hidden py-3 peer-checked:fixed peer-checked:right-6 peer-checked:top-6 md:peer-checked:relative md:peer-checked:right-0 md:peer-checked:top-0 peer-checked:[&>*:first-child]:translate-y-[calc(0.75rem/2+1px)] peer-checked:[&>*:first-child]:rotate-45 [&>*:last-child]:hover:translate-x-0 peer-checked:[&>*:last-child]:-translate-y-[calc(0.75rem/2+1px)]  peer-checked:[&>*:last-child]:translate-x-0 peer-checked:[&>*:last-child]:-rotate-45 [&>span]:transition [&>span]:duration-300 [&>span]:ease-in-out peer-checked:[&>span]:bg-base-100'
      >
        <span className='mb-3 block h-[2px] w-8 bg-neutral' />
        <span className='block h-[2px] w-8 translate-x-[0.75rem] transform bg-neutral' />
      </label>

      <nav className='fixed right-0 top-0 flex h-screen w-screen translate-x-full transform items-center justify-center bg-neutral shadow-xl transition duration-700 ease-in-out peer-checked:translate-x-0 md:w-1/4'>
        <ul className='relative z-10 space-y-16 text-center text-4xl font-semibold text-base-100'>
          {sections.map((section, i) => (
            <li key={section}>
              <label
                id={`nav-${section}`}
                htmlFor='nav'
                className='nav-link group/li cursor-pointer select-none gap-2 transition-all hover:text-base-200'
              >
                <span className='byline block text-xl text-accent'>
                  .0{i + 1}
                </span>
                <span className='relative inline-block w-fit capitalize after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:scale-x-0 after:transform after:bg-base-100 after:transition-all after:content-[""] group-hover/li:after:scale-x-100'>
                  {section}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
