import { titles } from '@helpers/title'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Title = ({ titleProp = '', backUrlProp = '' }) => {
  const router = useRouter()
  const backUrl = backUrlProp || '/'
  const title = titleProp || titles[router.pathname]

  return (
    <div>
      <div>
        <Link href={backUrl}>
          <a>
            <Image src="/icons/back.svg" width="40px" height="40px" alt="Back" />
          </a>
        </Link>
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  )
}
