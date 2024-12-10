// import Heroshop from '@/components/shopsSection'
import Shopcards from '@/components/Shopcards'
import Policy from '@/components/Policy'
import AllBaners from '@/components/AllBaners'


const Shoppage = () => {
  return (
    <>
    {/* <Heroshop /> */}
    <AllBaners expectedPath='/shop' src='/ractangle-shop2.png' span='Home' p='Shop'
          width='100' height='112'
          />
    
    <Shopcards />
    <Policy />
    </>
  )
}

export default Shoppage