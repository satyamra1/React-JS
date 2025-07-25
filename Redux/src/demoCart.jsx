import React from 'react'
import { useAppSelector } from './redux/hooks/index.'

const DemoCart = () => {
    const cartValue = useAppSelector((state) => state.counter)
  return (
    <>
    <div>Cart total</div>
    <h3>{cartValue}</h3>
    </>
  )
}

export default DemoCart