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
      redirect("/profile")
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
    <div className=" container mx-auto  absolute top-1/2 left-1/2  transform -translate-x-1/2 translate-y-[30%]">
    
      <form className=" max-w-lg mx-auto bg-white shadow p-4 rounded-md space-y-6 " onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-4xl  text-neutral-500  ">Sign In</h1>
        <div className="my-6 ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="bg-gray-50 border outline-none  text-gray-900 text-sm rounded-md w-full p-2.5 "
            placeholder="example@gmail.com"
            
          />
          {errors.email &&  <p className="text-sm text-red-400 my-1 pl-2">{errors.email?.message}</p> }
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            {...register("password")}
            placeholder="* * * * * * * *"
            className="bg-gray-50 border outline-none  text-gray-900 text-sm rounded-md w-full p-2.5 "
            
          />
          {errors.password &&  <p className="text-sm text-red-400 my-1 pl-2">{errors.password?.message}</p> }
        </div>

        <button type="submit" className="text-black   font-medium rounded-md text-sm px-6 py-2.5 text-center  mb-2 w-fit border leading-6">Login</button>
      </form>
    </div>
    
  );
};

export default Page;
