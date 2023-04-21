import Technologies from '../technologies/Technologies'
import profilePic from '../../assets/profile.jpeg'
import Image from 'next/image'

export default function About() {
  return (
    <section
      id='about'
      className='flex flex-col md:justify-center h-screen overflow-hidden p-0 pt-16 md:px-6 md:pt-0'
    >
      <div className='flex justify-between flex-col md:flex-row gap-12'>
        <div className='flex-1'>
          <div className='prose prose-sm md:prose-base max-w-none px-6'>
            <span className='byline text-sm md:text-base'>About me</span>
            <h1 className='section-title'>Hello again,</h1>
            <p>
              I’m Yousef, a 30-year-old Javascript Developer passionate about
              web development, particularly HTML, CSS, and JS. Although I’m
              currently working in the oil and gas industry, my true passion
              lies in web development. Ever since 2018, I’ve been dedicating my
              evenings and weekends to learning as much as I can about these
              technologies. I find it incredibly rewarding to see my knowledge
              grow and my projects come to life.
            </p>
            {/* <p>
              Although I'm currently working in the oil and gas industry, my
              true passion lies in web development. Ever since 2018, I've been
              dedicating my evenings and weekends to learning as much as I can
              about these technologies. It's been a challenging journey, but
              I've found it incredibly rewarding to see my knowledge grow and my
              projects come to life.
            </p> */}
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

        <div className='h-full w-1/3 relative hidden md:block'>
          <Image
            src={profilePic}
            alt='profile'
            className='object-cover h-full relative z-10 hover:translate-x-4 hover:translate-y-4 transition-all'
            width={1600}
            height={1069}
          />
          <div className='border-4 absolute top-4 left-4 w-full h-full border-neutral' />
        </div>

        {/* <div className='relative w-1/3 aspect-square'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1080'
            height='1080'
            viewBox='0 0 1080 1080'
            className='absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 z-0'
          >
            <path
              d='M862.7015006304658,563C846.7958208378254,661.2289353085038,751.4746140410199,830.1975985615966,690.374596941183,869.1868059255112C629.274579841346,908.1760132894258,574.1410517655424,819.8486448095588,496.1013980314441,796.9352441834876C418.06174429734574,774.0218435574164,258.4147444962368,787.6244523627029,222.13667453659286,731.7064021690843C185.85860457694895,675.7883519754657,225.97312701076677,522.7729501586884,278.43297827358066,461.4269430217761C330.8928295363946,400.0809358848638,452.3331658762355,393.8993175054916,536.8957821134762,363.63035934761035C621.458398350717,333.3614011897291,731.5077226108601,246.58492063242383,785.808675697025,279.81319407448876C840.1096287831899,313.0414675165537,878.6071804231062,464.7710646914963,862.7015006304658,563C846.7958208378254,661.2289353085038,751.4746140410199,830.1975985615966,690.374596941183,869.1868059255112'
              className='fill-secondary'
            />
          </svg>
        </div> */}
      </div>
    </section>
  )
}
