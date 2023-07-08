'use client'
import { useEffect, useReducer, useRef, useState } from 'react'
import '../assets/scss/style.scss'
import { motion, AnimatePresence } from 'framer-motion'
export default function Home() {
  const [selectedId, setSelectedId] = useState('')

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
        borderRadius: 0,
        transition: {
          duration: 0.5,
        },
      },
      open: {
        borderRadius: 20,
        transition: {
          duration: 0.5,
        },
        transform: 'none',
        transformOrigin: '50% 50% 0px',
      },
    },
  }

  // useEffect(() => {
  //   const body = document.getElementsByTagName('body')[0]
  //   if (selectedId) {
  //     body.style.overflow = 'hidden'
  //   } else {
  //     body.style.overflow = 'auto'
  //   }
  // })

  return (
    <div className="main-body">
      <main className="main-container">
        {Array.from(
          { length: 20 },
          (x: number = 1, y: number = 2) => x + y,
        ).map((item: number) => {
          return (
            <motion.section
              layoutId={`loader${item}`}
              key={`loaders${item}`}
              className="loaders"
              onClick={() => setSelectedId(`loader${item}`)}
            >
              <span className={`loader${item}`}></span>
            </motion.section>
          )
        })}

        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                className="loader-modal-backdrop"
                initial={modalStyle.backdrop.initial}
                animate={modalStyle.backdrop.open}
                exit={modalStyle.backdrop.initial}
              ></motion.div>
              <motion.div className="loader-modal">
                <motion.div
                  layoutId={selectedId}
                  className="loader-modal-dialog"
                  initial={modalStyle.dialog.initial}
                  animate={modalStyle.dialog.open}
                  exit={modalStyle.dialog.initial}
                >
                  {/* <div className="loader-content"> */}
                    <div className={selectedId}></div>
                  {/* </div> */}

                  <motion.button
                    className="loader-modal-close"
                    onClick={() => setSelectedId('')}
                  />
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
