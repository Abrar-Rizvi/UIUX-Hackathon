import AllBaners from '@/components/AllBaners'
import React from 'react'

const Cartpage = () => {
  return (
    <div>
        <AllBaners  expectedPath='/cart' src='/cart.png' span='Home' p='Cart'
          width='180' height='170' />
    </div>
  )
}

export default Cartpage