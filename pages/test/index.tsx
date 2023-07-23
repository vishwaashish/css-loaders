import { DEFAULT_SETTINGS, LOADER } from '@/constants'
import React, { useEffect, useState } from 'react'
import '../../assets/scss/common/_variables.scss'
import SyntaxHighlighter from 'react-syntax-highlighter'
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco'

const test = () => {
  const [state, setState] = useState(DEFAULT_SETTINGS)

  console.log(state)

  useEffect(() => {
    var style = getComputedStyle(document.body)
    setState({
      primaryColor: style.getPropertyValue('--loader-primary'),
      secondaryColor: style.getPropertyValue('--loader-secondary'),
      size: style.getPropertyValue('--loader-width'),
      border: style.getPropertyValue('--loader-border'),
    })
  }, [])

  const rootString = `:root {
    --loader-primary: #ff0000;
    --loader-secondary: #f4f4f4;
    --loader-border: 5px;
    --loader-width: 48px;
  }
  `
  return (
    <div
      style={{
        background: 'black',
        height: '50vh',
      }}
      className="loader-modal-dialog"
    >
      {LOADER?.map((val: any, index: number) => {
        return (
          <section key={index}>
            <style type="text/css" suppressHydrationWarning>
              {val.css}
            </style>
            <div dangerouslySetInnerHTML={{ __html: val.html }} />
            <SyntaxHighlighter language="html" showLineNumbers>
              {val.html}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="css" showLineNumbers>
              {rootString + val.css}
            </SyntaxHighlighter>
          </section>
        )
      })}
    </div>
  )
}

export default test
