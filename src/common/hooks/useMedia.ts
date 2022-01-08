import { useState, useEffect } from 'react'

export function useMedia(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => {
      setMatches(media.matches)
    }

    media.addEventListener('media-query', listener)
    return () => media.removeEventListener('media-query', listener)
  }, [matches, query])

  return matches
}
