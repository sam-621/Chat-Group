import Link, { LinkProps } from 'next/link'
import { FC } from 'react'

export const PrimaryLink: FC<Props> = ({ children, href, className, ...rest }) => {
  return (
    <Link href={href} {...rest}>
      <a className={`bg-primary text-white rounded text-center ${className}`}>{children}</a>
    </Link>
  )
}

type Props = LinkProps & {
  className?: string
}
