import { Variants, motion } from 'framer-motion'

export default function Home() {
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: i * 0.5 },
    }),
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    // 4rem header height
    <section
      id='home'
      className='section px-6 h-[calc(100vh-4rem)] flex flex-col justify-center'
    >
      {/* <Background /> */}
      <div className=''>
        <motion.div
          className='w-full prose md:prose-2xl prose-p:text-base prose-h1:mb-0 prose-h2:my-3 md:prose-h2:my-4 max-w-none'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.span className='byline block' variants={child}>
            Hi, my name is
          </motion.span>
          {/* <SlideText>
            <motion.span className='byline block'>Hi, my name is</motion.span>
          </SlideText> */}

          {/* <WavyText>Yousef Jalali.</WavyText> */}
          {/* <motion.h1 variants={child}>
            <WavyText>Yousef Jalali.</WavyText>
          </motion.h1> */}
          <motion.h1 variants={child}>Yousef Jalali.</motion.h1>

          <motion.h2 variants={child}>I build things for the web.</motion.h2>
          <motion.p className='md:w-2/3 py-2 md:py-4' variants={child}>
            I&apos;m a software engineer who loves crafting amazing digital
            experiences. From time to time, I even dip my toes into the design
            side of things. It&apos;s my passion to build exceptional digital
            experiences that leave a lasting impression.
          </motion.p>

          <motion.div variants={child}>
            {/* <Button href='#about'>About me</Button> */}
            <a href='#about' className='btn'>
              About me
            </a>
          </motion.div>
        </motion.div>

        {/* <div className='w-80 border'>illustration</div> */}
      </div>
    </section>
  )
}
