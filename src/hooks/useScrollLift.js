import { useEffect, useState } from 'react'

export default function useScrollLift(offset = 90) {
  const [lifted, setLifted] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setLifted(window.scrollY > offset)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return lifted
}
