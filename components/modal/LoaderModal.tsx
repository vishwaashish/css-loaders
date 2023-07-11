import { LOADER_COUNT } from '@/constants'
import { motion } from 'framer-motion'
import { memo, useCallback } from 'react'
import { AnimateButton } from '../button'
import NavigationButton from '../button/NavigationButton'

const LoaderModal = memo(({ current, router, onClose }: any) => {

  const modalStyle = {
    backdrop: {
      initial: {
        opacity: 0,
      },
      open: {
        opacity: 0.8,
      },
    },
    dialog: {
      initial: {
        y: 700,
        transition: {
          duration: 0.3,
        },
      },
      open: {
        y: 0,
        transition: {
          type: 'spring',
          damping: 25,
          stiffness: 250,
          duration: 0.3,
        },
      },
    },
  }

  const preventDialogClick = useCallback((event: any) => {
    event.stopPropagation()
  }, [])

  const nextAction = useCallback(() => {
    return router.push(`?loader=${+current + 1}`)
  }, [router, current])

  const prevAction = useCallback(() => {
    router.push(`?loader=${+current - 1}`)
  }, [router, current])

  return (
    <>
      <>
        <motion.div
          className="loader-modal-backdrop"
          initial={modalStyle.backdrop.initial}
          animate={modalStyle.backdrop.open}
          exit={modalStyle.backdrop.initial}
          onClick={onClose}
        ></motion.div>

        <motion.div className="loader-modal">
          <motion.div
            className="loader-modal-dialog"
            initial={modalStyle.dialog.initial}
            animate={modalStyle.dialog.open}
            exit={modalStyle.dialog.initial}
            onClick={preventDialogClick}
          >
            <AnimateButton className="loader-modal-close" onClick={onClose}>
              <svg height="20" viewBox="0 -960 960 960" width="20">
                <path d="m249-186-63-63 231-231-231-230 63-64 231 230 231-230 63 64-230 230 230 231-63 63-231-230-231 230Z" />
              </svg>
            </AnimateButton>

            {/* <button className="loader-modal-source-code">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -960 960 960"
                width="20"
              >
                <path d="M309-220 47-482l265-265 65 65-198 199 197 196-67 67Zm340 3-65-65 199-199-197-197 65-65 263 261-265 265Z" />
              </svg>
              <label>Source Code</label>
            </button> */}

            <motion.div
              initial={{
                y: 100,
              }}
              animate={{
                y: 0,
              }}
              key={`loader${current}`}
              className={`loader${current}`}
            ></motion.div>

            {+current > 1 && (
              <NavigationButton type="left" onClick={prevAction} />
            )}
            {LOADER_COUNT > +current && (
              <NavigationButton type="right" onClick={nextAction} />
            )}
          </motion.div>
        </motion.div>
      </>
    </>
  )
})

export default LoaderModal
