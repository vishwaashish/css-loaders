import { motion } from 'framer-motion'
import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react'

export const AnimateButton = ({
  tapScale = 0.9,
  hoverScale = 1.1,
  className,
  onClick,
  children,
  ...props
}: {
  hoverScale?: number
  tapScale?: number
  children?: React.ReactNode
  className?: string
  onClick?: React.FormEventHandler<HTMLButtonElement>
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
