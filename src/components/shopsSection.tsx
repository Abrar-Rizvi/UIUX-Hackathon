import Image from 'next/image'
import React from 'react'


const Heroshop = () => {
  
  return (
    <div className="md:h-[313px] bg-[url('/Rectangle-shop.png')] bg-cover bg-center">
      <div className=''>
        <Image src="/ractangle-shop2.png" alt='image' width={200} height={200} />
        <Image src="/Ractangle-shop.png" alt='image' width={200} height={200} />


      </div>

    </div>
  )
}

export default Heroshop