import { useEffect, useState } from 'react'
import useIntersectionObserver from './useIntersectionObserver'

function usePointerDown(): any {
  const [isPointerDown, setIsPointerDown] = useState(null)

  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    setIsPointerDown(true)
  }
  const onPointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    setIsPointerDown(false)
  }

  return [isPointerDown, { onPointerDown, onPointerUp }]
}

export default usePointerDown
