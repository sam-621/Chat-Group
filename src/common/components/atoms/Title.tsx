import { titles } from '@helpers/title'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Title = ({ titleProp = '', backUrlProp = '' }) => {
  const router = useRouter()
  const backUrl = backUrlProp || '/'
  const title = titleProp || titles[router.pathname]

  return (
    <div className="flex items-center px-2 pt-12">
      <div>
        <Link href={backUrl}>
          <a>
            <Image src="/icons/back.svg" width="40px" height="40px" alt="Back" />
          </a>
        </Link>
      </div>
      <div>
        <h1 className="text-primary bold font-bold text-3xl">{title}</h1>
      </div>
    </div>
  )
}
