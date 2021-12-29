import Link from 'next/link'
import { FC } from 'react'

export const StrongLink: FC<Props> = ({ children, href, className }) => {
  return (
    <Link href={href}>
      <a className={`text-primary ${className}`}>{children}</a>
    </Link>
  )
}

type Props = {
  href: string
  className?: string
}
