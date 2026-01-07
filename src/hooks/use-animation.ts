import { useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'

export function useAnimationVariants() {
  const shouldReduceMotion = useReducedMotion()

  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.4,
      },
    },
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  const staggerItem: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.4,
      },
    },
  }

  const scaleOnHover = {
    scale: shouldReduceMotion ? 1 : 1.02,
    transition: { duration: 0.2 },
  }

  const tapScale = {
    scale: shouldReduceMotion ? 1 : 0.98,
  }

  return {
    fadeInUp,
    fadeIn,
    staggerContainer,
    staggerItem,
    scaleOnHover,
    tapScale,
    shouldReduceMotion,
  }
}
