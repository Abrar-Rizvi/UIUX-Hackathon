import Image from "next/image"
import { Poppins } from 'next/font/google'
const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: "400",
        display: "swap"
      
      }
)



const Dynamicpage = () => {
    return (
        <div className={`${poppins.className}`}>
            <div className='w-full h-[100px]'>
                <p>{`Home > Shop |  Asgaard sofa`}</p>
            </div>
            <section>
                {/* images sections */}
                <div className=" flex justify-between">
                    <div className='left flex justify-center gap-5 bg-slate-600 w-[700px]'>
                        <div className='w-[76px] h-[400px] space-y-5 bg-yellow-400'>
                            <div className="w-full">
                            <Image src="/Asgaard-sofa.png" alt="product-image" width={200} height={200}
                                className="w-full "
                            />
                            </div>
                            
                            <div className="w-full">
                            <Image src="/Asgaard-sofa.png" alt="product-image" width={200} height={200}
                                className="w-full "
                            />
                            </div>
                            <div className="w-full">
                            <Image src="/Asgaard-sofa.png" alt="product-image" width={200} height={200}
                                className="w-full "
                            />
                            </div>
                            <div className="w-full">
                            <Image src="/Asgaard-sofa.png" alt="product-image" width={200} height={200}
                                className="w-full "
                            />
                            </div>
                        </div>
                        <div className='w-[481px] h-[460px] bg-[#FFF9E5]'>
                            <Image src="/Asgaard-sofa.png" alt="product-image" width={200} height={200}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                        {/* detail section */}
                    <div className='w-[500px] h-[700px] '>
                        <div>
                            <h1 className="font-bold text-[24px] mb-[10px]">Asgaard sofa</h1>
                            <h4 className="text-[#9F9F9F] mb-[10px]">Rs. 250,000.00</h4>
                            <p className="mb-[10px]">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts
                                a clear midrange and extended highs for a sound.</p>
                            <Image src="/size.png" alt="product-image" width={200} height={200} 
                            className="w-[150px] h-[70px] object-cover object-center mb-[10px]"
                            />
                            <h5 className="mb-[10px]">Color</h5>
                            <div className="flex gap-4 mb-[10px]">
                                <div className="w-[30px] h-[30px] rounded-full bg-[#816DFA]"></div>
                                <div className="w-[30px] h-[30px] rounded-full bg-[#000000]"></div>
                                <div className="w-[30px] h-[30px] rounded-full  bg-[#CDBA7B]"></div>
                            </div>
                            <div className="btn-cart flex gap-3 ">
                            <div className="w-[123px] h-[64px] rounded-lg border border-[#9F9F9F] flex justify-evenly items-center ">
                                <button>-</button>
                                <div>1</div>
                                <button>+</button>
                            </div>
                            <button className="px-[40px] text-black py-[10px] border-2  border-[#000000] rounded-2xl">Add To Cart</button>
                            </div>
                           


                    </div>
                    </div>
                </div>
            
               
            </section>
        </div>
    )
}

export default Dynamicpage