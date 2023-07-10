import { LOADER_COUNT } from '@/constants'
import { motion } from 'framer-motion'
import {
  MouseEventHandler,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { AnimateButton } from '../button'
// import { promises as fs } from 'fs'

const fetcher = (url: string) => fetch(url).then(res => res.json())
const LoaderModal = memo(({ current, router, onClose }: any) => {
  const ref: any = useRef(null)
  // const [state, setState] = useState<any>({
  //   size: 48,
  //   primaryColor: '#ff0000',
  //   secondaryColor: '#ffffff',
  // })

  // useEffect(() => {
  //   if (state.size) {
  //     document.documentElement.style.setProperty(
  //       '--loader-width',
  //       state.size + 'px' || 'var(--loader-width)',
  //     )
  //   }
  //   if (state.primaryColor) {
  //     document.documentElement.style.setProperty(
  //       '--loader-primary',
  //       state.primaryColor || 'var(--loader-primary)',
  //     )
  //   }
  //   if (state.primaryColor) {
  //     document.documentElement.style.setProperty(
  //       '--loader-secondary',
  //       state.secondaryColor || 'var(--loader-secondary)',
  //     )
  //   }
  // }, [state])

  // const handleRange = (e: any) => {
  //   setState((val: any) => ({ ...val, size: e.target.value }))
  // }
  // const handlePrimayColor = (e: any) => {
  //   setState((val: any) => ({ ...val, primaryColor: e.target.value }))
  // }
  // const handleSecondaryColor = (e: any) => {
  //   setState((val: any) => ({ ...val, secondaryColor: e.target.value }))
  // }

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

  const preventDialogClick = (event: any) => {
    event.stopPropagation()
  }

  const nextAction = () => {
    return router.push(`?loader=${+current + 1}`)
  }
  const prevAction = () => {
    router.push(`?loader=${+current - 1}`)
  }

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
            {/* <div> */}
            <AnimateButton className="loader-modal-close" onClick={onClose}>
              <svg height="20" viewBox="0 -960 960 960" width="20">
                <path d="m249-186-63-63 231-231-231-230 63-64 231 230 231-230 63 64-230 230 230 231-63 63-231-230-231 230Z" />
              </svg>
            </AnimateButton>

            <button className="loader-modal-source-code">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 -960 960 960"
                width="20"
              >
                <path d="M309-220 47-482l265-265 65 65-198 199 197 196-67 67Zm340 3-65-65 199-199-197-197 65-65 263 261-265 265Z" />
              </svg>
              <label>Source Code</label>
            </button>
            {/* </div> */}

            {/* <div
              style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  width: '100%',
                }}
              > */}
            <motion.div
              key={`loader${current}`}
              className={`loader${current}`}
              ref={ref}
            ></motion.div>

            {+current > 1 && (
              <NavigationButton type="left" onClick={prevAction} />
            )}
            {LOADER_COUNT > +current && (
              <NavigationButton type="right" onClick={nextAction} />
            )}
            {/* </div> */}

            {/* </div> */}
          </motion.div>
        </motion.div>
      </>
    </>
  )
})

export const NavigationButton = ({
  type = 'left',
  onClick,
}: {
  type: 'left' | 'right'
  onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
  const path = useMemo(() => {
    if (type === 'left') {
      return <path d="M561-219 298-481l263-263 80 65-198 198 198 197-65 65Z" />
    }

    return <path d="m375-219-65-65 198-197-198-198 65-65 263 263-263 262Z" />
  }, [])

  return (
    <AnimateButton className={`loader-${type}-btn`} onClick={onClick}>
      <svg height="30" width="30" viewBox="0 -960 960 960">
        {path}
      </svg>
    </AnimateButton>
  )
}

export default LoaderModal
