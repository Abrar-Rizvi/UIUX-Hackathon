import { Poppins } from 'next/font/google'

const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: "400",
        display: "swap"
      
      }
)

const Follow = () => {
  return (
    <div className={`${poppins.className} relativ mt-[10px] h-[450px]  md:flex md:justify-center md:items-center
    bg-[url('/instagram-sec.png')] bg-cover bg-center
    `}>
      {/* layer */}
      {/* <div className="absolute inset-0 bg-black/15"></div> */}
      <div className=' text-center '>
      <h1 className='text-[60px] font-bold mb-[3px]'>Our Instagram</h1>
      <p className='text-[20px] font-normal mb-[6px]'>Follow our store on Instagram</p>
      <button className='bg-[rgba(250,244,244,0.5)] w-[255px] h-[64px] shadow-lg hover:shadow-xl rounded-full'>Follow Us</button>
      </div>
     
    </div>
  )
}

export default Follow
