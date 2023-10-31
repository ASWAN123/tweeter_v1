"use client";

import { signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form"
import  {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import  { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { useEffect } from "react";


type Inputs = {
  email: string
  password: string
  save : boolean
}

const SignInSchema = z.object({
  email: z
  .string()
  .min(1, { message: "This field has to be filled." })
  .email("This is not a valid email."),
  password : z.string().min(6 ,  'Password must be at least 6 characters length') ,
}) ;

type SignInSchemaType = z.infer<typeof SignInSchema>;

const Page = () => {



  //  not  for  rachid  
  // check  later  how  can  i protect  and  redirect  user  if  i have  he has  already sign  in 
  
  const  { data : session } = useSession()

  // if ( session || session.user){
  //   redirect("/")
  // }

  useEffect(() => {
    if(session){
      redirect("/")
    }
  } ,  [session])

  








  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } =  useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });





  const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
    console.log(data)
    const  signWithData = await signIn('credentials' ,  data)
  
    console.log(signWithData)

    
  }







  return (
    <div className=" container mx-auto mt-8 ">
    
      <form className=" max-w-lg mx-auto bg-white shadow p-4 rounded-md space-y-6 " onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-medium leading-6 text-gray-900 text-center my-6">Sign In</h1>
        <div className="my-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@flowbite.com"
            
          />
          {errors.email &&  <p className="text-sm text-red-400 my-1 pl-2">{errors.email?.message}</p> }
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="text"
            id="password"
            {...register("password")}
            placeholder="* * * * * * * *"
            className="bg-gray-50 border  outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            
          />
          {errors.password &&  <p className="text-sm text-red-400 my-1 pl-2">{errors.password?.message}</p> }
        </div>

        <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium rounded-lg text-sm px-6 py-2.5 text-center  mb-2 w-fit border   leading-6">Login</button>
      </form>
    </div>
  );
};

export default Page;
