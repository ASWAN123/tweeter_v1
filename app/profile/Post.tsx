import Image from "next/image";
import Poststatic from "../componenets/Poststatic";
import Postactions from "../componenets/Postactions";
import Commentform from "../componenets/Commentform";
import Postdetails from "../componenets/Postdetails";
import Comment from "../componenets/Comment";


const Post = () => {
    return (
        <div className="w-full rounded-md flex flex-col gap-3 font-semibold bg-white shadow p-4 ">
            <div className="flex items-center w-full  min-h-[50px] max-h-[50px] gap-2">
                <Image
                    className="rounded"
                    src="/profile1.jpg"
                    height={40}
                    width={40}
                    alt="cover author"
                />
                <div className="flex flex-col text-[14px]">
                    <p>Nasser Beraj</p>
                    <span className="text-gray-400 text-[10px]">
                        24 August at 20:43
                    </span>
                </div>
            </div>

            < Postdetails />
            <div className="w-full flex  flex-col gap-1 ">
                <Poststatic />
                <hr />

                <Postactions />
                <hr />

                <Commentform />
                <hr />
            </div>

            <Comment />
        </div>
    );
};

export default Post;
