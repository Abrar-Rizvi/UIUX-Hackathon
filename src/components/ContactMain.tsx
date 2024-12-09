import Image from "next/image"
import { Poppins } from 'next/font/google'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: "400",
        display: "swap"

    }
)


const ContactMain = () => {
    return (
        <>
        <div className={`${poppins.className} md:h-[313px] bg-[url('/Rectangle-shop.png')] bg-cover bg-center`}>
             </div>

            <div className="text-center flex flex-col justify-center items-center">
                <h1 className="text-[36px] font-bold">Get In Touch With Us</h1>
                <p className="w-[600px] text-[16px] text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>

            <div className=" flex  md:flex md:flex-row md:justify-between p-[120px] ">
                <div className="left flex flex-col space-y-10">
                    <div className="address flex justify-start items-start">
                        <FaLocationDot />
                        <div className="ml-[20px] ">
                            <span className="text-[20px]">Address</span>
                            <p className="w-[200px]">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>

                    <div className="phone flex justify-start items-start">
                        <FaPhoneAlt />
                        <div className="ml-[20px]">
                            <span className="font-bold text-[20px]">Phone</span>
                            <p className="w-[200px]">Mobile: +(84) 546-6789
                            Hotline: +(84) 456-6789</p>
                        </div>
                    </div>

                    <div className="time flex flex-row">
                        <FaPhoneAlt />
                        <div className="ml-[20px]">
                            <span className="text-[20px]">Working Time</span>
                            <p className="w-[200px]">Monday-Friday: 9:00 - 22:00
                            Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>
                {/* Form */}
               <form action="" className="">
               <div className="right  w-[650px] py-[50px] ">
                   <div>
                   <label htmlFor="name">Your name</label> <br />
                   <input type="text"id="name" placeholder="ABC"/> <br />
                   </div>
<br />
                   <div>
                   <label htmlFor="email">Email address</label> <br />
                   <input type="text"id="email" placeholder="ABC@def.com"/> <br />
                   </div>
<br />
                   <div>
                   <label htmlFor="email">Subject</label> <br />
                   <input type="text"id="email" placeholder="This is optional"/><br />
                   </div>
<br />
                   <div>
                   <label htmlFor="message">Message</label><br />
                   <textarea id="message" name="message" rows={6} cols={6} placeholder="Hi! I'd like to aske about"></textarea><br />
                   </div>
                   <input type="submit" value="Submit" />
                </div>
               </form>
            </div>
            </>












       
    )
}

export default ContactMain