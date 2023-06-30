import { useEffect, useState } from 'react'

export const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return isMobile
}
