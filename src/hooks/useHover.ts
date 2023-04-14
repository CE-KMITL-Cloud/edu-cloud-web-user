import { MutableRefObject, useEffect, useRef, useState } from 'react'

export const useHover = <T extends HTMLElement = HTMLElement>(): [MutableRefObject<T | null>, boolean] => {
  const ref = useRef<T | null>(null)

  const [isHover, setIsHover] = useState<boolean>(false)

  const handleMouseOver = () => setIsHover(true)
  const handleMouseOut = () => setIsHover(false)

  useEffect(() => {
    const node = ref.current

    if (node) {
      node.addEventListener('mouseover', handleMouseOver)
      node.addEventListener('mouseout', handleMouseOut)
      return () => {
        node.removeEventListener('mouseover', handleMouseOver)
        node.removeEventListener('mouseout', handleMouseOut)
      }
    }
    return () => {}

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current])

  return [ref, isHover]
}
