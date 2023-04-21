import { Variants } from 'framer-motion'

export const slideVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
}
