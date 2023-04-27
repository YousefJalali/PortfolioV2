import Technologies from '../technologies/Technologies'
// import profilePic from '../../assets/profile.jpeg'
import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className='section md:justify-center md:flex-row'>
      <div className='flex h-fit gap-12'>
        <div className='flex-1 overflow-hidden'>
          <div className='prose prose-sm md:prose-base max-w-none'>
            <span className='byline'>About me</span>
            <h1>Hello again,</h1>
            <p>
              I’m Yousef, a 30-year-old Javascript Developer passionate about
              web development, particularly HTML, CSS, and JS. Although I’m
              currently working in the oil and gas industry, my true passion
              lies in web development. Ever since 2018, I’ve been dedicating my
              evenings and weekends to learning as much as I can about these
              technologies. I find it incredibly rewarding to see my knowledge
              grow and my projects come to life.
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

        <div className='w-1/3 relative hidden md:block'>
          <Image
            src='/profile.jpeg'
            alt='profile'
            className='object-cover h-full relative z-10 hover:translate-x-4 hover:translate-y-4 transition-all'
            width={1600}
            height={1069}
          />
          <div className='border-4 absolute top-4 left-4 w-full h-full border-neutral' />
        </div>
      </div>
    </section>
  )
}
