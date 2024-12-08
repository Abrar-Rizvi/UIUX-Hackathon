import Link from "next/link";


const Footer = () => {


    return (
        <>
        <div className='md:h-[555px]  pt-[80px] pb-[60px] px-[70px]
         
        '>
           
            <div className=" w-full h-full  pb-[10px]
             md:flex md:flex-row md:justify-around  border-b-2 border-b-[#D9D9D9]
            ">
                <div className=" text-[#9F9F9F] pt-[70px] 
                
                ">400 University Drive Suite 200 Coral <br />
                    Gables, <br />
                    FL 33134 USA</div>
                <div className="">
                    <h3 className="text-[#9F9F9F] pb-[30px]">Links</h3>
                    <ul className="md:h-[312] space-y-5 text-[16px] font-medium">

                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Shop</Link>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Contact</Link>
                        </li>


                    </ul>
                </div>
                <div className=" md:h-[242px]  ">
                    <h3 className="text-[#9F9F9F] pb-[30px]">Help</h3>
                    <ul className="space-y-5 text-[16px] font-medium">
                        <li>
                            <Link href="/">Payment Options</Link>
                        </li>

                        <li>
                            <Link href="/">Returns</Link>
                        </li>

                        <li>
                            <Link href="/">Privacy Policies</Link>
                        </li>
                    </ul>
                </div>
                <div className=" md:h-[101px]  ">
                    <h3 className="text-[#9F9F9F]  md:space-x-4">Newsletter</h3>
                   <div className="md:flex md:justify-center mt-[20px]  ">
                   <label htmlFor="email"></label>
                    <input type="text" id="email" placeholder="Enter Your Email Assress"
                        className="focus:outline-none  border-b-2 border-b-[#000000]" />
                    <Link href="/" className="text-[#000000] border-b-2 ml-[25px]  border-b-[#000000] ">SUBSCRIBE</Link>
                   </div>
                </div>
            </div>
            <div className="px-[70px] pt-[20px]">
         <p className="text-[16px]  ">2022 Meubel House. All rights reverved</p>
         </div>
        </div>
       
        
         </>
    )
}

export default Footer