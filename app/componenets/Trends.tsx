import React from "react";

const Trends = () => {
    return (
        <div className="bg-white p-4 w-[80%] flex flex-col gap-2 rounded-md mx-auto">
            <p className=" font-semibold text-[#4F4F4F] ">Trends for you</p>
            <hr />
            <ul className="space-y-4">
                <li className="flex flex-col gap-2" >
                    <p className="text-lg font-semibold">#programming</p>
                    <span className="text-[12px]  text-neutral-400">125k Tweets</span>
                </li>
                <li className="flex flex-col gap-2" >
                    <p className="text-lg font-semibold" >#devchallenges</p>
                    <span className="text-[12px]  text-neutral-400" >50k Tweets</span>
                </li>
                <li className="flex flex-col gap-2" >
                    <p className="text-lg font-semibold" >#frontend</p>
                    <span className="text-[12px]  text-neutral-400" >25k Tweets</span>
                </li>
                <li className="flex flex-col gap-2" >
                    <p className="text-lg font-semibold" >#helsinki</p>
                    <span className="text-[12px]  text-neutral-400" >53k Tweets</span>
                </li>
                <li className="flex flex-col gap-2" >
                    <p className="text-lg font-semibold" >#100DaysOfCode</p>
                    <span className="text-[12px]  text-neutral-400" >57k Tweets</span>
                </li>
                <li className="flex flex-col gap-2" >
                    <p className="text-lg font-semibold" >#learntocode</p>
                    <span className="text-[12px]  text-neutral-400" >5k Tweets</span>
                </li>
            </ul>
        </div>
    );
};

export default Trends;
