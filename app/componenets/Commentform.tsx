import Image from "next/image";

const Commentform = () => {
    return (
        <div className="flex items-center w-full  min-h-[50px] max-h-[50px] gap-2  ">
            <Image
                className="rounded"
                src="/profile1.jpg"
                height={40}
                width={40}
                alt="cover author"
            />
            <div className="flex w-full flex-col text-[14px]">
                {/* <input
                    type="text"
                    placeholder="Comment on this tweet ..."
                    className="w-full outline-none h-10 px-2 py-1  bg-neutral-200  placeholder:text-gray-500 "
                /> */}
                          <input
            type="email"
            id="email"

            className="bg-gray-50 border outline-none  text-gray-900 text-sm rounded-md w-full p-2.5 "
            placeholder="tweet your reply"
            
          />
            </div>
        </div>
    );
};

export default Commentform;
