import Image from "next/image";
import { Poppins } from 'next/font/google'

const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: "400",
        display: "swap"
      
      }
)



const Shopcards = () => {
    interface Products {
        description: string;
       price: string
        id: number;
        src: string;
      
      }
      const products: Products[] = [
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
        },
        // '''
        {
          description: "Grain coffee table",
          price: "Rs. 25,000.00",
           id: 5,
           src: "/shop/Grain coffee table 1.png"
        
      },
      {
          description: "Kent coffee table",
          price: "Rs. 25,000.00",
           id: 6,
           src: "/shop/Mask group.png"
      },
      {
          description: "Round coffee table_color 2",
          price: "Rs. 25,000.00",
           id: 7,
           src: "/shop/Round coffee table_color 2 1.png"
      },
      {
          description: "teak",
          price: "Rs. 25,000.00",
           id: 8,
           src: "/shop/Reclaimed teak coffee table 1.png"
      }
      ]
  return (
   

<>

    <div className='flex  gap-2 flex-col justify-center flex-wrap items-center md:p-[30px] md:flex md:flex-row md:justify-center md:items-center'>
      {products.map((product) => {
            return <div key={product.id} className='   flex  flex-col justify-center items-center md:w-[287px]
            md:h-[372px]
            '>
                <Image 
                src={product.src} alt='top-pic' width={300} height={300}
                className="w-full "

                />
                <div className={`${poppins.className} text-center`}>
                <p className='md:text-[16px] font-normal'>{product.description}</p>
                <p className='md:text-[24px] font-bold'>{product.price}</p>
                </div>
                
            </div>
        })}
      </div>
      <div className="flex justify-center mt-[50px] gap-10 items-center">
        <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">1</div>
        <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">2</div>
        <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">2</div>
        <div className="w-[78px] md:w-[98px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">Next</div>
      </div>
      </>
  )
}

export default Shopcards