import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

export const Strong: FC<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>> = ({
  children,
  ...rest
}) => {
  return (
    <strong className="text-primary" {...rest}>
      {children}
    </strong>
  )
}

// type Props = {
//   strong
// }
