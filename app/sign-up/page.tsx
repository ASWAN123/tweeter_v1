"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form"
import  {z} from "zod"
import axios from 'axios';
import { useRouter } from "next/navigation";


type Inputs = {
  email: string
  username: string
  name : string
  password : string
}


const SignUpSchema = z.object({
    email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
    username: z.string().min(3).max(30) ,
    name: z.string().min(3).max(30) ,
    password : z.string().min(6 ,  'Password must be at least 6 characters length') ,
  }) ;


type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const Page = () => {
  let route  = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    const  addNewUser = await axios.post('/api/user' ,  data )
    if(addNewUser.status === 201){
      route.push('/sign-in')
    }
  }




  return (
    <div className=" container mx-auto mt-8 ">
    
      <form className=" max-w-lg mx-auto bg-white shadow-md p-4 rounded-md space-y-6 " onSubmit={handleSubmit(onSubmit)} >
        <h1 className="text-2xl font-medium leading-6 text-gray-900 text-center my-6">Sign Up</h1>
        <div className="my-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@example.com"
            
          />
          {errors.email &&  <p className="text-sm text-red-400 my-1 pl-2">{errors.email?.message}</p> }
        </div>
        <div className="my-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}

            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="smith_123"
            
          />
          {errors.username &&  <p className="text-sm text-red-400 my-1 pl-2">{errors.username?.message}</p> }
        </div>
        <div className="my-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}

            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="john smith"
            
          />
          {errors.name &&  <p className="text-sm text-red-400 my-1 pl-2">{errors.name?.message}</p> }
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="bg-gray-50 border  outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            
          />
          {errors.password &&  <p className="text-sm text-red-400 my-1 pl-2">{errors.password?.message}</p> }
        </div>

        <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium rounded-lg text-sm px-6 py-2.5 text-center  mb-2 w-fit border   leading-6">Register</button>

      </form>
    </div>
  );
};

export default Page;
