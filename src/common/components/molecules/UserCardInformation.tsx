import { PrimaryLink } from '@components/atoms/PrimaryLink'
import { RedButton } from '@components/atoms/RedButton'
import { Strong } from '@components/atoms/Strong'
import { useUser } from '@hooks/fetch/useUser'
import { useAuth } from '@hooks/useAuth'

export const UserCardInformation = () => {
  const { data } = useUser()
  const { isLogged } = useAuth()
  return (
    <>
      {isLogged ? (
        <div className="flex flex-col gap-5">
          <h2 className="text-text-black text-center text-2xl">@{data?.username}</h2>
          <PrimaryLink href="/edit/profile" className="py-4">
            Edit profile
          </PrimaryLink>
          <RedButton className="py-4">Log out</RedButton>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          <p className="text-center">
            Send <Strong>messages</Strong> in real time and meet new <Strong>people</Strong>
          </p>
          <PrimaryLink href="/register" className="py-5">
            Get in with email
          </PrimaryLink>
        </div>
      )}
    </>
  )
}
