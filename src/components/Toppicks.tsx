import Image from 'next/image';
import { Poppins } from 'next/font/google'
import Link from 'next/link';

const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: "400",
        display: "swap"
      
      }
)

const Toppicks = () => {
    interface TopPics {
        description: string;
       price: string
        id: number;
        src: string;
      
      }
    //   const img1 = "/feature-1.png"
    //   const img2 = "/feature-2.png"
      const topPics: TopPics[] = [
        {
            description: "Trenton modular sofa_3",
            price: "Rs. 25,000.00",
             id: 1,
             src: "/image1.png"
          
        },
        {
            description: "Granite dining table with dining chair",
            price: "Rs. 25,000.00",
             id: 2,
             src: "/image2.png"
        },
        {
            description: "Outdoor bar table and stool",
            price: "Rs. 25,000.00",
             id: 3,
             src: "/image3.png"
        },
        {
            description: "Plain console with teak mirror",
            price: "Rs. 25,000.00",
             id: 4,
             src: "/image4.png"
        }
      ]

  return (
    <div className='main-container py-[50px] px-4 md:px-8'>
        <div className={`heading-para font-medium  text-center ${poppins.className}`} >
            <h2 className={`text-[28px] md:text-[36px] md:m-[10px]`}>Top Picks For You</h2>
            <p className='text-[14px] md:text-[16px] lg:text-[18px] text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>
      <div className='flex flex-col md:flex-wrap lg:flex-nowrap justify-center items-center   w-full  md:p-[30px] md:flex md:flex-row md:justify-center md:items-center'>
      {topPics.map((pic) => {
            return <Link  key={pic.id} href="/shop">
              <div className='flex flex-col justify-center   items-center cursor-pointer transform transition-transform duration-300 hover:scale-110'>
                <Image 
                src={pic.src} alt='top-pic' width={300} height={300}
                className=''

                />
                <div className={`${poppins.className} text-center`}>
                <p className='md:text-[16px] font-normal'>{pic.description}</p>
                <p className='md:text-[24px] font-bold'>{pic.price}</p>
                </div>
                
            </div>
            </Link>
           
        })}
      </div>
      <div className=' mx-auto mt-[30px] border-b-2 border-b-[#000000]  pb-[6px] w-[115px] h-[49px]  
      flex justify-center items-center
      '>
        <Link href="/shop"  className={`${poppins.className} text-20px font-semibold`}>View More</Link>
      </div>
    </div>
  )
}

export default Toppicks