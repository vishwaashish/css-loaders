import { LOADER } from '@/constants'
import { memo, useCallback } from 'react'

const LoadersLoop = memo(({ onClick }: any) => {
  const click = useCallback(
    (item: any) => () => {
      return onClick(item)
    },
    [],
  )

  return LOADER.map(item => (
    <section
      key={`loaders${item.id}`}
      className="loaders"
      onClick={click(item)}
    >
      <style type="text/css">{item.css}</style>
      <span dangerouslySetInnerHTML={{ __html: item.html }} />
    </section>
  ))
})

export default LoadersLoop
