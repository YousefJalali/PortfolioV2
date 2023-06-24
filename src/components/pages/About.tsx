import Technologies from '../Technologies'
import Image from 'next/image'

export default function About() {
  // const diff = new Date().getTime() - new Date('1992-10-19').getTime()
  // const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))

  return (
    <div className='items-center md:flex-row md:justify-center'>
      <div className='flex h-fit gap-12 md:items-center lg:gap-24 xl:gap-32'>
        <div className='flex-1 overflow-hidden'>
          <div className='prose prose-sm max-w-none md:prose-base'>
            <span className='byline'>About me</span>
            <h1>Hello again,</h1>
            <p>
              My name is Yousef and I enjoy creating things that live on the
              internet. Although I’m currently working in the oil and gas
              industry, my true passion lies in web development. Ever since
              2018, I’ve been dedicating my evenings and weekends to learning as
              much as I can about these technologies. I find it incredibly
              rewarding to see my knowledge grow and my projects come to life.
            </p>
            <p>
              My goal is to become a full-time web developer, and I believe that
              with my passion, dedication, skills, and experience, I can succeed
              in this field. Therefore, I’m always looking for new opportunities
              and challenges that can help me reach my goal.
            </p>
            <p>
              Lately, I’ve been experimenting with some awesome technologies:
            </p>
          </div>
          <Technologies />
        </div>

        <div className='group relative hidden w-1/3 md:block'>
          <div className='h-full w-full overflow-hidden'>
            {/* <Image
              src='/profile.jpeg'
              alt='profile'
              className='relative z-10 h-full object-cover transition duration-200 ease-in-out group-hover:scale-110'
              width={1600}
              height={1069}
            /> */}

            <img
              src='https://placehold.co/800x1200'
              alt='profile'
              className='relative z-10 h-full object-cover transition duration-200 ease-in-out group-hover:scale-110'
              width={800}
              height={1200}
            />
          </div>

          <div className='absolute -left-2 -top-2 z-10 h-full w-full border-4 border-neutral transition-all duration-200 ease-in-out group-hover:left-0 group-hover:top-0' />
        </div>
      </div>
    </div>
  )
}
