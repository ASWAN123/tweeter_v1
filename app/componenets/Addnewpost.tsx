"use client";

import { BiImageAlt, BiWorld } from "react-icons/bi";
import Image from "next/image";
import { useEffect, useState, Fragment } from "react";
import UploadFile from "./UploadFile";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { BsFillPeopleFill } from "react-icons/bs";
import MyModal from "./Mymodel";
import Mydropdown from "./MyDropdown";

const Addnewpost = () => {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    const [upload, setUpload] = useState(false);

    useEffect(() => {
        console.log("upload  has  been  changed  ");
    }, [upload]);

    return (
        <div className="bg-white w-full p-4 rounded-lg  space-y-2">
            <p>Tweet somthing today</p>
            <hr className="w-full" />
            <form action="" className="flex flex-col gap-4 ">
                <div className="flex gap-2 items-center ">
                    <Image
                        className="rounded row-span-2"
                        src="/profile1.jpg"
                        height={40}
                        width={40}
                        alt="cover author"
                    />
                    <textarea
                        placeholder="whats happning ??"
                        className="w-full p-2"
                        name=""
                        id=""
                    ></textarea>
                </div>

                <div className="flex gap-2 items-center  ml-8">
                    <button type="button" onClick={openModal}>
                        <BiImageAlt size={24} color="blue" />
                    </button>
                    {/* /////////////////////////////////////////////////////// */}
                    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />

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
