"use client" ;
import { Dialog, Transition } from "@headlessui/react";
import  { AiOutlineClose  } from "react-icons/ai"
import { Fragment, useState  , SetStateAction , Dispatch  , ReactNode, useEffect } from "react";
import { useEdgeStore } from "../lib/edgestore";
import Link from "next/link";

interface MyComponentProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    urls: string[];
    setUrls: Dispatch<SetStateAction<string[]>>;
  }



const MyModal: React.FC<MyComponentProps> = ({ isOpen, setIsOpen, urls , setUrls }) => {

    
    const [file , setFile] = useState<File>() ;
    const { edgestore } = useEdgeStore() ;
    const [progress , setProgress] = useState(0) ;


    useEffect(() => {
        console.log(file)
    } ,  [file] )


    const  closeModal = async () => {
        if (file){
            const res = await edgestore.publicFiles.upload({file ,
                onProgressChange: (progress) => {
                    setProgress(progress)
                    console.log(progress);
                  },})
            setUrls((prevUrls) => [...prevUrls, res.url]);

        }
        setIsOpen(false);

    }



    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Upload your image
                                    </Dialog.Title>

                                    <div className="flex items-center justify-center w-full mt-2">
                                        <label
                                            htmlFor="dropzone-file"
                                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  "
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg
                                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 16"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                    />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <span className="font-semibold">
                                                        Click to upload
                                                    </span>{" "}
                                                    or drag and drop
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    PNG, JPG or GIF (MAX.
                                                    800x400px)
                                                </p>

                                            </div>
                                            <input
                                                id="dropzone-file"
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                multiple={false}
                                                onChange={(e) => {
                                                    setFile(e.target.files?.[0])
                                                }}
                                            />
                                        </label>
                                    </div>

                                    <div className="mt-4 flex  flex-col gap-4 ">
                                        {/* only  one  image  allowed  because  of  the  limitation for  free  tier  of  the  service */}
                                        {file && <div className="mt-2 flex gap-2 items-center"><p className=" text-green-500">{file.name}</p><AiOutlineClose size={20} color="red" className = " cursor-pointer hover:bg-red-300" onClick ={() => {setFile(undefined)} } />  </div> }
                                        
                                        {
                                            progress > 0 &&
                                        <div className=" w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                            <div className="bg-blue-600 text-xs font-medium transition-all duration-150 text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: progress+"%" }} >{progress}%</div>
                                        </div>
}
                                        <button
                                            type="button"
                                            className="w-fit inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 "
                                            onClick={closeModal}
                                        >
                                            Confirm
                                        </button>
                                        {/* {urls?[0].url && <Link href={urls.url} target="_blank" >URL</Link>} */}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}


export default MyModal ;