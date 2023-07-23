import {
  DEFAULT_SETTINGS,
  LOADER_BORDER_SIZES,
  LOADER_SIZES,
  containerStyle,
} from '@/constants'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const HomeSidebar = () => {
  const [state, setState] = useState<{
    size: string
    primaryColor: string
    secondaryColor: string
    border: string
  }>(DEFAULT_SETTINGS)

  useEffect(() => {
    var style = getComputedStyle(document.body)
    setState({
      primaryColor: style.getPropertyValue('--loader-primary'),
      secondaryColor: style.getPropertyValue('--loader-secondary'),
      size: style.getPropertyValue('--loader-width'),
      border: style.getPropertyValue('--loader-border'),
    })
  }, [setState])

  const handleRange = (value: number) => {
    document.documentElement.style.setProperty('--loader-width', value + 'px')
    setState((val: any) => ({ ...val, size: value + 'px' }))
  }

  const handleBorder = (value: number) => {
    document.documentElement.style.setProperty('--loader-border', value + 'px')
    setState((val: any) => ({ ...val, border: value + 'px' }))
  }

  const handlePrimayColor = (e: any) => {
    document.documentElement.style.setProperty(
      '--loader-primary',
      e.target.value,
    )
    setState((val: any) => ({ ...val, primaryColor: e.target.value }))
  }
  const handlePrimayChange = (e: any) => {
    document.documentElement.style.setProperty(
      '--loader-primary',
      e.target.value,
    )
    setState((val: any) => ({ ...val, primaryColor: e.target.value }))
  }
  const handleSecondaryColor = (e: any) => {
    document.documentElement.style.setProperty(
      '--loader-secondary',
      e.target.value,
    )
    setState((val: any) => ({ ...val, secondaryColor: e.target.value }))
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
  }
  const onResetForm = () => {
    setState(DEFAULT_SETTINGS)
    document.documentElement.style.setProperty(
      '--loader-width',
      DEFAULT_SETTINGS.size,
    )
    document.documentElement.style.setProperty(
      '--loader-primary',
      DEFAULT_SETTINGS.primaryColor,
    )
    document.documentElement.style.setProperty(
      '--loader-secondary',
      DEFAULT_SETTINGS.secondaryColor,
    )
  }
  return (
    <>
      <motion.div
        initial={containerStyle.sidebarOverlay.initial}
        animate={containerStyle.sidebarOverlay.open}
        exit={containerStyle.sidebarOverlay.initial}
        className="sidebar-overlay"
      ></motion.div>
      <motion.div
        initial={containerStyle.sidebar.initial}
        animate={containerStyle.sidebar.open}
        exit={containerStyle.sidebar.initial}
        className="sidebar-container"
      >
        <form className="sidebar-content" onSubmit={onSubmit}>
          <div className="heading">
            <h2>Accessibility</h2>
            <motion.button
              className="icon-button"
              variants={containerStyle.sidebarReset}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
              onClick={onResetForm}
            >
              <motion.svg
                variants={containerStyle.sidebarResetArrow}
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -960 960 960"
                width="20"
              >
                <path d="M452.5-101q-132-10-222.5-107.25T139.5-438.5q0-79 35.75-149T275.5-704l65.5 65q-51 32-80.5 86T231-438.5q0 97 63.25 166.25T452.5-193.5v92.5Zm57.5 0v-92.5q96.5-10 158.5-79t62-166q0-99-67-170.75T497-687h-24l65 66-49 49.5-166-166 166-167 49 49-76 76h25q140 0 238 100.5t98 240.5Q823-305 732.25-208T510-101Z" />
              </motion.svg>
            </motion.button>
          </div>
          <div className="form-control">
            <label htmlFor="size">Size</label>

            <div className="loader-sizes">
              {LOADER_SIZES.map(item => {
                return (
                  <button
                    id="size"
                    className={state.size === item.size + 'px' ? 'active' : ''}
                    onClick={() => handleRange(item.size)}
                    key={item.label}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="border-size">Border size</label>

            <div className="loader-sizes">
              {LOADER_BORDER_SIZES.map(item => {
                return (
                  <button
                    id="border-size"
                    className={
                      state.border === item.size + 'px' ? 'active' : ''
                    }
                    onClick={() => handleBorder(item.size)}
                    key={item.label}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="primaryColor">Primary Color</label>
            <div className="form-group">
              <input
                id="primaryColor"
                type="color"
                value={state?.primaryColor}
                onChange={handlePrimayColor}
              />
              <input
                type="text"
                value={state?.primaryColor}
                onChange={handlePrimayChange}
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="secodaryColor">Secodary Color</label>
            <div className="form-group">
              <input
                id="secodaryColor"
                type="color"
                value={state?.secondaryColor}
                onChange={handleSecondaryColor}
              />
              <input
                type="text"
                value={state?.secondaryColor}
                onChange={handleSecondaryColor}
              />
            </div>
          </div>

          <div>
            <a href="https://github.com/vishwaashish">
              @Ashishkumar Vishwakarma
            </a>
          </div>
        </form>
      </motion.div>
    </>
  )
}

export default HomeSidebar
