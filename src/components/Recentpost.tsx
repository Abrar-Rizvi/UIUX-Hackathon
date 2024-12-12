import Image from "next/image"
import Link from "next/link"




const Recentpost = ({ src, detail }: any) => {
    return (

       
        <div className=' flex  lg:max-w-[80%] h-[80px] bg-yellow-400'>
            
            {/* image div */}
            <div className="  lg:w-[50%]  rounded-xl bg-red-600">
             
              <Image src={src} alt="recent-image" width={200} height={200}
                    className="  lg:max-w-[100px]  h-full object-cover rounded-xl"/>
            
            </div>
            <Link href="#">
            <div className='flex flex-col justify-around lg:ml-3'>
                <p className="text-[18px] font-semibold">{detail}</p>
                <p className="text-[#9f9f9f]">03 Aug 2022</p>
              
            </div>
            </Link>
            
          
        </div>
      
      

    )
}

export default Recentpost