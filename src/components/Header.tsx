"use client"
import Link from "next/link";
import { useState } from "react";
import { FiHeart, FiSearch, FiUserCheck } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";

interface HeaderprosT {
    isHomePage: boolean
}
const Header = (props: HeaderprosT ) => {
    //creating type for navigation items
    interface NavigationT {
        name: string;
        href: string;
        id: number
    }
    const navigationItems: NavigationT[] = [
        {
            name: "Home",
            href: "/",
            id: 1
        },
        {
            name: "Shop",
            href: "/shop",
            id: 2
        },
        {
            name: "About",
            href: "/about",
            id: 3
        },
        {
            name: "Contact",
            href: "/contact",
            id: 4
        },
    ]
    // using use state

    const [isNavOpen, setNavOpen] = useState(false);

    const clickHandle = () => {
        setNavOpen(!isNavOpen)
       
    }
    return (
        <header className={`${props.isHomePage ? 'bg-[#FBEBB5]' : ''} flex justify-between md:flex md:justify-end md:h-[100px]`}>
            {/* hamburger btn */}
            <button
        onClick={clickHandle}
        className="md:hidden lg:hidden flex items-center"
      >
        <div className="w-9 h-14 cursor-pointer flex flex-col items-center justify-center">
          <div
            className={`w-[50%] h-[2px] bg-[#202426] rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${
                isNavOpen ? "rotate-[-45deg]" : ""
            }`}
          ></div>
          <div
            className={`w-[50%] h-[2px] bg-[#202426] rounded-md transition-all duration-300 origin-center ${
                isNavOpen ? "hidden" : ""
            }`}
          ></div>
          <div
            className={`w-[50%] h-[2px] bg-[#202426] rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${
              isNavOpen ? "rotate-[45deg]" : ""
            }`}
          ></div>
        </div>
      </button>



            {/* navigation link */}
            <nav className={`navigationItems  md:block absolute top-[10%]    h-screen md:h-0 z-10 md:static    ${isNavOpen ? 'translate-y-0 w-full' : ' -translate-x-full  '}  md:translate-x-0 md:translate-y-0  md:transform-none transition-transform duration-500 ease-in-out`}>
                <ul className="flex flex-col  md:flex w-64 md:w-auto md:flex-row  md:justify-center md:items-center gap-x-8 gap-y-8 font-bold ">
                    {navigationItems.map((item) => {
                        return <li key={item.id} className=" md:border-none p-[36px]">
                            <Link href={item.href}
                            className={`text-heroTextColor`}
                            >{item.name}</Link>
                        </li>
                    })}

                </ul>
            </nav>

            <div className="design-cart flex gap-5 p-[36px]">
            <FiUserCheck />
            <FiSearch />
            <FiHeart />
            <LuShoppingCart />
            
            </div>
        </header>
    )
}

export default Header






