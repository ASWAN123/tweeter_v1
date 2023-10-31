"use client";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiBaremetrics } from "react-icons/si";
import  classnames from "classnames"
import {  signOut , useSession}  from "next-auth/react"

const Navbar = () => {
  let pathname = usePathname();
  const signs = [
    {label: 'Sign In' ,  href : '/sign-in' },
    {label: 'Sign Up' ,  href : '/sign-up' },
  ]


  let  { data : session } = useSession()

  return (
    <nav className="h-[80px] bg-white ">
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
        
         {
          session?.user &&  <button className="px-6 py-2 text-red-700 " onClick={() => {signOut()}} >Log out</button>
         }
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
