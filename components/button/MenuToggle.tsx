'use client'
import { motion } from 'framer-motion'

const MenuToggle = ({ toggle, assessbility }: any) => (
  <motion.label
    whileHover={{ scale: 1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    htmlFor="toggle-menu"
    className="toggle-menu"
  >
    <input
      type="checkbox"
      name="check"
      defaultChecked={assessbility}
      className="_input"
      id="toggle-menu"
      onChange={toggle}
    />
    <span></span>
    <span></span>
    <span></span>
  </motion.label>
)

export default MenuToggle
