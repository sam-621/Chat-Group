import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <a href="">
        <h1 className="font-roboto text-primary font-medium text-2xl md:text-3xl">Chat Group</h1>
      </a>
    </Link>
  )
}
