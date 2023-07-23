import { motion } from 'framer-motion'
import React from 'react'

export const AnimateButton = ({
  tapScale = 0.9,
  hoverScale = 1.1,
  className,
  onClick,
  children,
  disabled = false,
}: {
  hoverScale?: number
  tapScale?: number
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: React.FormEventHandler<HTMLButtonElement>
}) => {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      whileTap={{ scale: disabled ? 1 : 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}

export const CopyButton = ({ onClick }: any) => {
  return (
    <AnimateButton className="copyIconButton" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path
          fill="var(--loader-text)"
          d="M200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-160q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480Zm0 0v-480 480Z"
        />
      </svg>
    </AnimateButton>
  )
}
