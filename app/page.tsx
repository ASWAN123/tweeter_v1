"use client"
import  { useSession } from "next-auth/react"
import { redirect } from "next/navigation"



export default function Home() {

  const  {data : session } = useSession()

  // console.log(session)
  // if( !session || !session?.user ){
  //   redirect('/api/auth/signin')
  // }


  return (

    <div>Hi ,  Congratulation You are  logged  In With Email : { session?.user?.email } </div>
  )
}
