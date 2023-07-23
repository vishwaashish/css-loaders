export const CopyCard = ({
  titleProps,
  title,
  isCopy = false,
  children,
}: {
  title: string
  children?: any
  titleProps?: any
  isCopy?: boolean
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="title">{title}</h3>
        {isCopy && <span className="copied">Content copied</span>}
        {titleProps}
      </div>
      <div className="card-body">{children}</div>
    </div>
  )
}
