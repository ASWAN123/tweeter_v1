import Image from "next/image";
import {AiOutlineHeart } from "react-icons/ai"

const Comment = () => {
    return (
        <div className="w-full grid grid-rows-3 grid-flow-col ">
            <Image
                className="rounded row-span-2"
                src="/profile1.jpg"
                height={40}
                width={40}
                alt="cover author"
            />
            <div className="w-full border flex flex-col gap-2 row-span-2 bg-neutral-300 h-[100px] p-2 rounded-md">
                <div className="flex gap-2">
                    <p className="text-semibold ">jone mayer</p>
                    <span className="text-gray-400 text-[12px]">24 August at 20:43</span>
                </div>
                <div>
                    <p>
                        I’ve seen awe-inspiring things that I thought I’d never
                        be able to explain to another person.
                    </p>
                </div>
            </div>
            <div className="row-span-1"><AiOutlineHeart size={24} color="black"/>Like ,  6 Likes</div>
        </div>
    );
};

export default Comment;
