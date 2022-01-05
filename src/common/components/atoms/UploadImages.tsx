import Image from 'next/image'

export const UploadImages = () => {
  return (
    <label htmlFor="input-files">
      <Image src="/icons/photo.svg" width={30} height={30} alt="Upload images" />
      <input className="hidden" type="file" name="upload files" id="input-files" />
    </label>
  )
}
