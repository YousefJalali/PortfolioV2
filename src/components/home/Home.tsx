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
    <section id='home' className='section min-h-screen'>
      {/* <Background /> */}
      <div>
        <motion.div
          className='w-full prose prose-sm md:prose-base max-w-none md:prose-h1:text-7xl prose-h1:mb-2 prose-p:m-0'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.span className='byline block' variants={child}>
            Hi, my name is
          </motion.span>

          {/* <WavyText>Yousef Jalali.</WavyText> */}
          <motion.h1 variants={child}>Yousef Jalali.</motion.h1>

          <motion.h1 variants={child}>I build things for the web.</motion.h1>

          <motion.p className='py-2 md:py-4 max-w-xl' variants={child}>
            I&apos;m a software engineer who loves crafting amazing digital
            experiences. From time to time, I even dip my toes into the design
            side of things. It&apos;s my passion to build exceptional digital
            experiences that leave a lasting impression.
          </motion.p>

          <motion.div variants={child}>
            {/* <Button href='#about'>About me</Button> */}
            <a href='#about' className='btn mt-4'>
              About me
            </a>
          </motion.div>
        </motion.div>

        {/* <div className='w-80 border'>illustration</div> */}
      </div>
    </section>
  )
}
