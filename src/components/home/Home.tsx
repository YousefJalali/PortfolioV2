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

    <motion.div
      className='prose prose-sm w-full max-w-none md:prose-base prose-h1:mb-2 prose-p:m-0 md:prose-h1:text-7xl'
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <motion.span className='byline block' variants={child}>
        Hi, my name is
      </motion.span>

      <motion.h1 variants={child}>Yousef Jalali.</motion.h1>

      <motion.h1 variants={child}>I build things for the web.</motion.h1>

      <motion.p className='max-w-3xl py-2 md:py-4' variants={child}>
        A front end developer with a genuine passion for crafting outstanding
        digital experiences. <br /> With a strong sense of design and expertise
        in modern web technologies, I specialize in transforming ideas into
        visually stunning and user-friendly interfaces. Whether it&apos;s
        developing responsive layouts or optimizing performance, I am dedicated
        to delivering top-notch front end solutions that leave a lasting impact.
      </motion.p>

      {/* <motion.div variants={child}>
        <a href='#about' className='btn mt-4'>
          About me
        </a>
      </motion.div> */}
    </motion.div>
  )
}
