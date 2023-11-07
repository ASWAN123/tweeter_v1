"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import LeftMenu from "./LeftMenu";
import Post from "./Post";
import UserCard from "./UserCard";

export default function Profile() {
    const { data: session } = useSession();

    return (
        <div className="relative h-[500px] ">
            <div className="h-[250px] relative ">
                <Image
                    src="/cover.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="cover author"
                />
            </div>

            {/* profile widget */}
            <div className=" w-[85%] mx-auto flex flex-col gap-4  ">
                <UserCard />

                {/* main */}
                <section className="flex  justify-between gap-4 ">
                    <LeftMenu />
                    <div className="w-full flex flex-col gap-6 ">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </section>
            </div>

            {
                // left menu
                // posts
            }
        </div>
    );
}
