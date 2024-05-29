import Link from 'next/link'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";

const NavBar = () => {

    let menu = [
        {
            id: 1,
            href: '/',
            label: 'Home',
            
        },
         {
            id: 2,
            href: '/about',
            label: 'About',
            
        },
         {
            id: 3,
            href: '/services',
            label: 'Services',
            
        }
    ]
  return (
    <>
      <nav className="border w-[100vw]">
        <div className="flex gap-6 m-3 md:mx-[2rem] justify-between ">
          <div className="flex items-center md:gap-[2rem]">
            <RiMenu5Fill className='text-3xl md:hidden block mr-5 hover:cursor-pointer'/>
            <span className="font-bold md:text-xl text-blue-600">CHIGOZIE OHAKWE</span>
            <ul className="flex gap-4 md:opacity-100 opacity-0 ">
              {menu.map((item) => (
                <li key={item.id} className="hover:bg-gray-100  ">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* right Nav */}
          <div className="flex gap-3 item-center justify-center">
            <input
              type="text"
              className="border text-sm hidden  md:block rounded-full w-[15rem] 
             h-[2rem] px-5 "
              placeholder="Search..."
            />
            <FaSearch className="font-bold text-xl flex items-center justify-center" />
            <FaUser className="font-bold text-xl" />
            <IoNotifications className="font-bold text-xl" />

          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar