import React from 'react'
import {useWindowSize} from '@react-hook/window-size'
import Confetti from 'react-confetti'

export const WEEEEEE = () => {
  const windowSize = useWindowSize()

  return <Confetti width={windowSize.width} height={windowSize.height} />
}
