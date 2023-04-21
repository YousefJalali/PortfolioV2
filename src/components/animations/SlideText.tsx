import { Variants } from 'framer-motion'
import { ReactElement, ReactNode, cloneElement } from 'react'

export default function SlideText({
  delay = 0,
  children,
}: {
  delay?: number
  children: ReactElement
}) {
  const slideVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <>
      {cloneElement(children, {
        variants: { slideVariants },
        initial: 'hidden',
        animate: 'visible',
        // transition:{{ delay }}
      })}
    </>
  )
}
