



import Image from "next/image";
import { Poppins } from 'next/font/google';
import Descriptive from "@/components/Descriptive";
import ShopingCart from "@/components/ShopingCart";
const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: "400",
        display: "swap"
    }
);

const Dynamicpage = async ({ params }: any) => {
    const { id } = await params;
    console.log(id);

    return (
        <>
        <div className={`${poppins.className}`}>
            <div className='w-full h-[100px]'>
                <p className="pl-[60px] text-sm sm:text-base md:text-lg">
                    <span className="text-[#9F9F9F] mx-2">Home</span>
                    {'>'}
                    <span className="text-[#9F9F9F] mx-2">Shop</span> | Asgaard sofa
                </p>
            </div>
            <section className="px-[20px] md:px-[50px] ">
                {/* Image section */}
                <div className="flex flex-col items-center justify-center lg:flex lg:flex-row lg:justify-between ">
                    <div className='left flex flex-col lg:flex-row justify-center items-center gap-5 lg:w-[700px]'>
                        <div className='w-full sm:w-[150px] md:w-[200px] lg:w-[76px] h-auto  flex justify-center item-center
                        lg:flex lg:flex-col lg:justify-center lg:items-center
                        '>
                            <div className="w-[50%] lg:w-full">
                                <Image src="/Asgaard-sofa.png" alt="product-image" width={200} height={200} className="w-full" />
                            </div>
                            <div className="w-[50%] lg:w-full">
                                <Image src="/Asgaard-sofa.png" alt="product-image" width={200} height={200} className="w-full" />
                            </div>
                            <div className="w-[50%] lg:w-full">
                                <Image src="/Asgaard-sofa.png" alt="product-image" width={200} height={200} className="w-full" />
                            </div>
                            <div className="w-[50%] lg:w-full">
                                <Image src="/Asgaard-sofa.png" alt="product-image" width={200} height={200} className="w-full" />
                            </div>
                        </div>
                        <div className='w-full sm:w-[481px] h-auto bg-[#FFF9E5] rounded-lg'>
                            <Image src="/Asgaard-sofa.png" alt="product-image" width={200} height={200} className="w-full h-full" />
                        </div>
                    </div>

                    {/* Detail section */}
                    <div className='w-full md:w-[500px] mt-[60px] md:mt-0 md:h-auto border-b-2 border-[#D9D9D9] mr-[50px]'>
                        <div className="py-8">
                            <h1 className="font-bold text-[24px] mb-[10px]">Asgaard sofa</h1>
                            <h4 className="text-[#9F9F9F] mb-[10px]">Rs. 250,000.00</h4>
                            <p className="mb-[10px]">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts
                                a clear midrange and extended highs for a sound.</p>
                            <Image src="/size.png" alt="product-image" width={200} height={200} className="w-[150px] h-[70px] object-cover object-center mb-[10px]" />
                            <h5 className="mb-[10px]">Color</h5>
                            <div className="flex gap-4 mb-[10px]">
                                <div className="w-[30px] h-[30px] rounded-full bg-[#816DFA]"></div>
                                <div className="w-[30px] h-[30px] rounded-full bg-[#000000]"></div>
                                <div className="w-[30px] h-[30px] rounded-full bg-[#CDBA7B]"></div>
                            </div>
                            <div className="btn-cart flex gap-3 mt-[30px]">
                                <div className="w-[123px] h-[64px] rounded-lg border border-[#9F9F9F] flex justify-evenly items-center ">
                                    <button>-</button>
                                    <div>1</div>
                                    <button>+</button>
                                </div>
                                <button className="px-[40px] text-black py-[10px] border-2 border-[#000000] rounded-2xl">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div>
                    
                    </div>
                   
                </div>
               
            </section>
        </div>
        <Descriptive />
        {/* <ShopingCart /> */}
        </>
    );
};

export default Dynamicpage;
