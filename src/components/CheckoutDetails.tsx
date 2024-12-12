import { Poppins } from "next/font/google"
import Button from "./Button"
const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: "400",
        display: "swap"

    }
)

const CheckoutDetails = () => {
    return (
        <div className={`flex flex-col  px-10 py-24 ${poppins.className} space-y-5`}>
            <div className="section border-b-0.5 border-[#D9D9D9] space-y-2 pb-5  max-w-[500px]">
                <div className="item text-[20px] font-medium">
                    <h2>Product</h2>
                    <h2>Subtotal</h2>
                </div>

                <div className="item space-x-12">
                    <p><span className="text-[#9F9F9F]">Asgaard sofa</span>  x 1</p>
                    <p>Rs. 250,000.00</p>
                </div>

                <div className="item">
                    <p>Subtotal</p>
                    <p>Rs. 250,000.00</p>
                </div>

                <div className="item">
                    <p>Total</p>
                    <p><span className="text-[#B88E2F] font-bold text-[22px]">Rs. 250,000.00</span></p>
                </div>
            </div>

            {/* section 2 */}
            <div className="section border-b-0.5 border-[#D9D9D9] space-y-2 pb-5  max-w-[500px]">
                <ul className="list-disc list-inside">
                    <li className="">Direct Bank Transfer</li>
                </ul>
                <p className="max-w-full w-full">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

                <ul className="list-disc list-inside">
                    <li className="">Direct Bank Transfer</li>
                    <li className="">Cash On Delivery</li>
                </ul>
                <p>
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                </p>
            </div>
           <div className="flex justify-center  max-w-[500px]">
           <Button content="Log In"
                classname="w-[180px] h-[55px] flex justify-center items-center border-1 border-black rounded-[15px] text-[18px] cursor-pointer " />
           </div>
        </div>
    )
}

export default CheckoutDetails