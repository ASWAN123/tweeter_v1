"use client";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiBaremetrics } from "react-icons/si";
import  classnames from "classnames"
import {  signOut , useSession}  from "next-auth/react"

import { Menu } from '@headlessui/react'
import  {  MdOutlineArrowDropDown } from "react-icons/md"
import Image from "next/image";
import { useState } from "react";


const Navbar = () => {
  
  let pathname = usePathname();
  const signs = [
    {label: 'Sign In' ,  href : '/sign-in' },
    {label: 'Sign Up' ,  href : '/sign-up' },
  ]

  let  [openMenu , setOpenMenu] = useState(false)


  let  { data : session } = useSession()

  return (
    <nav className="h-[80px] bg-white relative px-4">
      <div className="  h-[80px] container mx-auto  flex space-x-10 items-center justify-between  ">
        <Link href="/" className="flex  space-x-2 items-center">
          <SiBaremetrics color="blue" size={40} />
          <p className="font-bold text-lg">Tweeter</p>
        </Link>

        <ul className="flex  space-x-10 ">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/explore">Explore</Link>
          </li>
          <li>
            <Link href="/bookmarks">Bookmarks</Link>
          </li>
        </ul>
       
        <div className="flex space-x-10">
        {
          !session?.user && <>
          {
            signs.map((x ,  index) => {
              return <Link key={index} href={x.href} className={classnames({
                "text-blue-400" : pathname === x.href
              })}>{x.label}</Link>
            })
          }
          </>

        }
        

        {/* {
          session?.user  &&  (
            
            <div onClick={() => {setOpenMenu(!openMenu)}} className="flex    cursor-pointer gap-3  items-center ">
              <Image
              className="rounded mx-auto"
              src="/profile1.jpg"
              height={30}
              width={30}
              objectFit="cover"
              alt="cover author"
              />
              <p>Robert Krueger</p>
              <MdOutlineArrowDropDown size={24} color="gray" />
            </div>
          )
        } */}

        {
         session?.user &&  <button className="px-6 py-2 text-red-700 " onClick={() => {signOut()}} >Log out</button>
        }



        </div>

      </div>
    </nav>
  );
};

export default Navbar;
