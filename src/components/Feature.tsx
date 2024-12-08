import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins(
  {
      subsets: ['latin'],
      weight: "400",
      display: "swap"
    
    }
)

const Feature = () => {
  interface Features {
    name: string;
    href: string;
    id: number;
    src: string;
    secondName: string
  }
  const img1 = "/feature-1.png"
  const img2 = "/feature-2.png"
  const featureItem: Features[] = [
    {
      name: "Side table",
      secondName: "View More",
      href: "#",
       src: img1,
      id: 1
      
    },
    {
      name: "Side table",
      secondName: "View More",
      href: "#",
      src: img2,
      id: 2
    }
  ]


  return (
    <div className='bg-[#FAF4F4] md:flex md:flex-row-reverse md:justify-around '>
      {featureItem.map((item) => {
        return <div key={item.id} >
          <div className="">
          <Image src={item.src} alt="feature-image" width={300} height={300} 
          className="w-full h-full object-cover object-center"
          />
          </div>
         <div className=" text-center  ">
         <h4 className={`${poppins.className} text-[25px] font-medium`}>{item.name}</h4>
          <Link href={item.href}
          className="underline "
          >{item.secondName}</Link>
         </div>

        </div>
      })}
    </div>
  )
}


export default Feature