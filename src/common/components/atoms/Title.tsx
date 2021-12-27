import { titles } from '@helpers/title'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

export const Title: FC<Props> = ({ titleProp = '', backUrlProp = '', className }) => {
  const router = useRouter()
  const backUrl = backUrlProp || '/'
  const title = titleProp || titles[router.pathname]

  return (
    <div className={`flex items-center px-2 pt-12 ${className}`}>
      <div>
        <Link href={backUrl}>
          <a>
            <Image src="/icons/back.svg" width="40px" height="40px" alt="Back" />
          </a>
        </Link>
      </div>
      <div className="flex-1">
        <h1 className="text-primary bold font-bold text-3xl text-center">{title}</h1>
      </div>
    </div>
  )
}

type Props = {
  titleProp?: string
  backUrlProp?: string
  className?: string
}
