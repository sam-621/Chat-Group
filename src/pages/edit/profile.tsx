import { PageLoader } from '@components/atoms/loaders/PageLoader'
import { useAuth } from '@hooks/useAuth'
import { EditProfileView } from '@modules/EditProfile/EditProfileView'

const EditProfilePage = () => {
  const { isLoading } = useAuth()

  if (isLoading) {
    return <PageLoader />
  }

  return <EditProfileView />
}

export default EditProfilePage
