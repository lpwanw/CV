import { motion, useReducedMotion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
}

export function MotionSection({ children, delay = 0, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: {
          opacity: 0,
          y: shouldReduceMotion ? 0 : 32,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: shouldReduceMotion ? 0.01 : 0.6,
            delay: shouldReduceMotion ? 0 : delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function MotionList({ children, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.1,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function MotionItem({ children, ...props }: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: shouldReduceMotion ? 0 : 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: shouldReduceMotion ? 0.01 : 0.4,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
