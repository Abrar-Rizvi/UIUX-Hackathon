import Account from '@/components/Account'
import AllBaners from '@/components/AllBaners'
// import Heroshop from '@/components/shopsSection'
import React from 'react'

const MyContactpage = () => {
  return (
    <div>
        <div>
          {/* <Heroshop /> */}
          <AllBaners expectedPath='/my-page' src='/myAccount.png' span='Home' p='Myaccount'
          width='180' height='170'
          />
        
        </div>
        <div>
            <Account />
        </div>
    </div>
  )
}

export default MyContactpage