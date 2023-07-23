import { LOADER, modalStyle } from '@/constants'
import { motion } from 'framer-motion'
import { memo, useCallback, useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { AnimateButton, CopyButton } from '../button'
import NavigationButton from '../button/NavigationButton'
import { CopyCard } from '../card'

const LoaderModal = memo(({ current, router, onClose }: any) => {
  const [sourceCode, setSourceCode] = useState(false)
  const [copyed, setCopyed] = useState('')

  const currentLoader =
    LOADER?.find((val: any) => val.id == current) ?? LOADER[0]

  const [rootString] = useState(() => {
    var style = getComputedStyle(document.body)
    return `:root {
      --loader-primary: ${style.getPropertyValue('--loader-primary')};
      --loader-secondary: ${style.getPropertyValue('--loader-secondary')};
      --loader-border: ${style.getPropertyValue('--loader-width')};
      --loader-width: ${style.getPropertyValue('--loader-border')};
    }
  
  `
  })

  useEffect(() => {
    if (copyed) {
      setTimeout(() => {
        setCopyed('')
      }, 3000)
    }
  }, [copyed])

  const preventDialogClick = useCallback((event: any) => {
    event.stopPropagation()
  }, [])

  const nextAction = useCallback(() => {
    return router.push(`?loader=${+current + 1}`)
  }, [router, current])

  const prevAction = useCallback(() => {
    router.push(`?loader=${+current - 1}`)
  }, [router, current])

  const toggleSourceCode = useCallback(() => {
    setSourceCode(val => !val)
  }, [router, current])

  const copy = (value: string, type: string) => async () => {
    return await navigator.clipboard
      .writeText(value)
      .then(() => setCopyed(type))
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
            <div className="loader-modal-header">
              <div></div>
              <AnimateButton
                className="loader-modal-source-code"
                onClick={toggleSourceCode}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                >
                  <path d="M309-220 47-482l265-265 65 65-198 199 197 196-67 67Zm340 3-65-65 199-199-197-197 65-65 263 261-265 265Z" />
                </svg>
                Source Code
              </AnimateButton>

              <AnimateButton className="loader-modal-close" onClick={onClose}>
                <svg height="20" viewBox="0 -960 960 960" width="20">
                  <path d="m249-186-63-63 231-231-231-230 63-64 231 230 231-230 63 64-230 230 230 231-63 63-231-230-231 230Z" />
                </svg>
              </AnimateButton>
            </div>

            <div className="loader-modal-body">
              <div className="loader_wrap">
                <NavigationButton
                  type="left"
                  disabled={+current <= 1}
                  onClick={prevAction}
                />

                <motion.div
                  initial={{
                    y: 100,
                  }}
                  animate={{
                    y: 0,
                  }}
                >
                  <style type="text/css" suppressHydrationWarning>
                    {currentLoader.css}
                  </style>
                  <span
                    dangerouslySetInnerHTML={{ __html: currentLoader.html }}
                  />
                </motion.div>

                <NavigationButton
                  disabled={LOADER.length - 1 < +current}
                  type="right"
                  onClick={nextAction}
                />
              </div>
              <motion.div
                className={`code_wrap ${sourceCode ? 'active' : ''}`}
                initial="initial"
                exit="initial"
              >
                <CopyCard
                  title="HTML"
                  titleProps={
                    <CopyButton onClick={copy(currentLoader.html, 'html')} />
                  }
                  isCopy={copyed === 'html'}
                >
                  <SyntaxHighlighter
                    language="html"
                    showLineNumbers
                    customStyle={{ margin: 0 }}
                  >
                    {currentLoader.html}
                  </SyntaxHighlighter>
                </CopyCard>
                <CopyCard
                  title="CSS"
                  titleProps={
                    <CopyButton
                      onClick={copy(rootString + currentLoader.css, 'css')}
                    />
                  }
                  isCopy={copyed === 'css'}
                >
                  <SyntaxHighlighter
                    language="css"
                    showLineNumbers
                    customStyle={{ margin: 0, maxHeight: 350 }}
                  >
                    {rootString + currentLoader.css}
                  </SyntaxHighlighter>
                </CopyCard>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </>
    </>
  )
})

export default LoaderModal
