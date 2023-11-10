"use client";

import { BiImageAlt, BiWorld } from "react-icons/bi";
import Image from "next/image";
import { useEffect, useState, Fragment } from "react";
// import UploadFile from "./UploadFile";
// import { Menu, Dialog, Transition } from "@headlessui/react";
// import { BsFillPeopleFill } from "react-icons/bs";
import MyModal from "./Mymodel";
import Mydropdown from "./MyDropdown";

// interface MyComponentProps {
//     isOpen: boolean ;
//     setIsOpen: Dispatch<SetStateAction<boolean>> ;
//     url: string[] ;
//     setUrl: Dispatch<SetStateAction<string[]>> ;
//   }



const Addnewpost = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [urls, setUrls] = useState<string[]>([]);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    const [upload, setUpload] = useState(false) ;

    useEffect(() => {
        console.log("upload  has  been  changed  ");
    }, [upload]);





    return (
        <div className="bg-white w-full p-4 rounded-lg  space-y-2">
            <p>Tweet somthing today</p>
            <hr className="w-full" />
            <form action="" className="flex flex-col gap-4 ">
                <div className="flex gap-2 items-start ">
                    <Image
                        className="rounded row-span-2"
                        src="/profile1.jpg"
                        height={40}
                        width={40}
                        alt="cover author"
                    />
                    <div className="flex flex-col gap-2 ">
                    <textarea
                        placeholder="whats happning ??"
                        className="w-full p-2 outline-none resize-none"
                        name=""
                        id=""
                        rows={3}
                    ></textarea>
                    {
                    urls.map((url, index) => (
                        <Image
                        key={index} // Don't forget to add a unique key for each item in the array
                        className="rounded row-span-2"
                        src={url}
                        height={250}
                        width={400}
                        alt={`cover author ${index}`} // Use a unique alt text for each image
                        />
                    ))
                    }
                    </div>
                </div>

                <div className="flex gap-2 items-center  ml-8">
                    <button type="button" onClick={openModal}>
                        <BiImageAlt size={24} color="blue" />
                    </button>
                    {/* image upload */}
                    {/* /////////////////////////////////////////////////////// */}
                    <MyModal isOpen={isOpen} setIsOpen={setIsOpen}  urls={urls} setUrls ={setUrls}/>

                    {/* /////////////////////////////////////////////////////// */}
                    <Mydropdown />

                    <input
                        className="bg-blue-400 px-6 py-2 rounded-sm  text-white ml-auto mr-4"
                        type="submit"
                        name=""
                        id=""
                        value="Tweet"
                    />
                </div>
                
            </form>
        </div>
    );
};

export default Addnewpost;
