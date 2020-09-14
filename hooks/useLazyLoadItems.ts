import { useEffect, useState } from 'react'
import useIntersectionObserver from './useIntersectionObserver'

function useLazyLoadItems(items): any {
  const [itemsToShow, setIngredientsToShow] = useState([...items]?.slice(0, 8))
  const [ref, setRef] = useState(null)
  const { isIntersecting } = useIntersectionObserver(ref)

  //to lazy load items to show in grid
  useEffect(() => {
    const counterItemsInGrid = itemsToShow.length
    setIngredientsToShow([...items]?.slice(0, counterItemsInGrid + 8))
  }, [isIntersecting])

  return [{ itemsToShow }, { ref, setRef }]
}

export default useLazyLoadItems
