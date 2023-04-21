import { Variants, motion } from 'framer-motion'

export default function Logo() {
  const strokeVariants: Variants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  }
  const fillVariants: Variants = {
    hidden: {
      fillOpacity: 0,
    },
    visible: {
      fillOpacity: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
        delay: 0.5,
      },
    },
  }

  return (
    <a className='w-8 h-8 lg:h-12 lg:w-12'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 652.7 677.27'>
        <polygon
          points='650.9 399.75 650.9 677.27 527.66 677.27 527.66 429.81 248.14 0 395.42 0 650.9 399.75'
          className='fill-neutral'
        />
        <polygon
          points='466.91 454.89 466.91 677.27 343.68 677.27 343.68 484.95 29.37 0 176.65 0 466.91 454.89'
          className='fill-neutral'
        />
        <polygon
          points='114.13 549.43 377 549.43 377 677.01 29.37 677.01 114.13 549.43'
          className='fill-neutral'
        />
        <polygon
          points='594.19 56.06 595.61 228.59 652.7 317.92 652.7 0 449.52 0 484.7 55.05 594.19 56.06'
          className='fill-base-300'
        />
        <polygon
          points='0 24.05 0 647.75 57.09 558.42 58.34 114.07 0 24.05'
          className='fill-base-300'
        />
      </svg>
      {/* <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 500 760'
        className='h-full w-full p-1'
      >
        <motion.path
          d='M327.43,489.21V357.06Q296,380,255,380q-51.76,0-88.38-36.62T130,255V5H5V255A250,250,0,0,0,255,505C279.88,505,304.24,501.09,327.43,489.21Z'
          variants={strokeVariants}
          initial='hidden'
          animate='visible'
          strokeWidth={10}
          strokeMiterlimit={10}
          className='stroke-neutral fill-none'
        />
        <motion.path
          d='M327.43,489.21V357.06Q296,380,255,380q-51.76,0-88.38-36.62T130,255V5H5V255A250,250,0,0,0,255,505C279.88,505,304.24,501.09,327.43,489.21Z'
          variants={fillVariants}
          initial='hidden'
          animate='visible'
          className='fill-neutral'
        />
        <motion.path
          d='M504.9,5H255V126.42H380V505q0,51.75-36.62,88.38T255,630v0H5V755H255A250,250,0,0,0,505,505V5Z'
          variants={strokeVariants}
          initial='hidden'
          animate='visible'
          strokeWidth={10}
          strokeMiterlimit={10}
          className='stroke-neutral fill-none'
        />
        <motion.path
          d='M504.9,5H255V126.42H380V505q0,51.75-36.62,88.38T255,630v0H5V755H255A250,250,0,0,0,505,505V5Z'
          variants={fillVariants}
          initial='hidden'
          animate='visible'
          className='fill-neutral'
        />
      </svg> */}
      {/* <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 575.04 823.33'
          // variants={svgVariants}
        >
          <motion.path
            d='M107,802.83a72.57,72.57,0,0,1-72.48-73.21c.38-39.9,33.5-71.77,73.41-71.77H284.54l10,0c32,0,58.64-11,81.31-33.69s33.69-49.27,33.69-81.31V212.35a38.1,38.1,0,0,0-38.1-38.1H355.26a70.79,70.79,0,0,1-70.71-71.41c.38-38.92,32.68-70,71.61-70h99.58a98.8,98.8,0,0,1,98.8,98.8v411.2a260,260,0,0,1-260,260Z'
            variants={strokeVariants}
            initial='hidden'
            animate='visible'
            strokeWidth={24}
            className='stroke-neutral fill-none'
          />
          <motion.path
            d='M107,802.83a72.57,72.57,0,0,1-72.48-73.21c.38-39.9,33.5-71.77,73.41-71.77H284.54l10,0c32,0,58.64-11,81.31-33.69s33.69-49.27,33.69-81.31V212.35a38.1,38.1,0,0,0-38.1-38.1H355.26a70.79,70.79,0,0,1-70.71-71.41c.38-38.92,32.68-70,71.61-70h99.58a98.8,98.8,0,0,1,98.8,98.8v411.2a260,260,0,0,1-260,260Z'
            variants={fillVariants}
            initial='hidden'
            animate='visible'
            className='fill-neutral'
          />
          <motion.path
            d='M280.5,502.47a260,260,0,0,1-260-260V93a72.5,72.5,0,0,1,145,0v149.5c0,32,11,58.63,33.69,81.3s49.27,33.7,81.31,33.7c2.12,0,4.24-.06,6.3-.15,1.18-.06,2.37-.09,3.54-.09a72.6,72.6,0,0,1,72.59,72.46c0,37.87-29.33,69.6-66.79,72.24C291.13,502.29,285.87,502.47,280.5,502.47Z'
            variants={strokeVariants}
            initial='hidden'
            animate='visible'
            strokeWidth={24}
            className='stroke-neutral fill-none'
          />
          <motion.path
            d='M280.5,502.47a260,260,0,0,1-260-260V93a72.5,72.5,0,0,1,145,0v149.5c0,32,11,58.63,33.69,81.3s49.27,33.7,81.31,33.7c2.12,0,4.24-.06,6.3-.15,1.18-.06,2.37-.09,3.54-.09a72.6,72.6,0,0,1,72.59,72.46c0,37.87-29.33,69.6-66.79,72.24C291.13,502.29,285.87,502.47,280.5,502.47Z'
            variants={fillVariants}
            initial='hidden'
            animate='visible'
            className='fill-neutral'
          />
        </motion.svg> */}
    </a>
  )
}
