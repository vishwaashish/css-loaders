import { MouseEventHandler, useMemo } from 'react'
import { AnimateButton } from '.'

const NavigationButton = ({
  type = 'left',
  onClick,
  disabled = false,
}: {
  type: 'left' | 'right'
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}) => {
  const path = useMemo(() => {
    if (type === 'left') {
      return <path d="M561-219 298-481l263-263 80 65-198 198 198 197-65 65Z" />
    }

    return <path d="m375-219-65-65 198-197-198-198 65-65 263 263-263 262Z" />
  }, [])

  return (
    <AnimateButton
      className={`loader-${type}-btn`}
      disabled={disabled}
      onClick={onClick}
    >
      <svg height="30" width="30" viewBox="0 -960 960 960">
        {path}
      </svg>
    </AnimateButton>
  )
}

export default NavigationButton
