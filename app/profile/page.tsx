"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { BsFillPersonPlusFill } from "react-icons/bs";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="relative h-[500px]">
      <div className="h-[250px] relative">
        <Image
          src="/cover.jpg"
          layout="fill"
          objectFit="cover"
          alt="cover author"
        />
      </div>

      {/* profile widget */}
      <div className="absolute px-6 py-2 top-[260px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] mx-auto shadow-md rounded-md space-y-10 h-[160px]  bg-white  ">
        <section className="relative flex items-start  justify-between gap-8 ">
          <div className="min-w-[170px] min-h-[170px] rounded p-1 -mt-[80px] bg-white ">
            <Image
              className="rounded mx-auto"
              src="/profile1.jpg"
              height={160}
              width={160}
              objectFit="cover"
              alt="cover author"
            />
          </div>

          <div className="flex flex-col space-y-8 justify-between py-4 ml-8 mr-auto  ">
            <div className="flex gap-2 space-x-6 items-center ">
              <p className="md:text-2xl  font-bold ">Robert Krueger</p>
              <p className="text-gray-500 text-md ">
                <span className="text-black font-semibold">2,569</span>{" "}
                Following
              </p>
              <p className="text-gray-500 text-md ">
                <span className="text-black font-semibold">10.8K</span>{" "}
                Followers
              </p>
            </div>

            <p className="text-gray-500 text-md">
              Passionate and versatile photographer known for captivating
              compositions and evocative storytelling through a blend of
              technical precision and creative vision.
            </p>
          </div>

          <button className=" mt-4 ml-auto w-fit text-white rounded flex gap-2 px-6 py-2 bg-[#2F80ED] ">
            <BsFillPersonPlusFill size={24} color="white" /> Follow
          </button>
        </section>

        {/* main */}
        <section className="flex space-x-4   ">
          {/* menu compoenenet */}
          <div className="flex-initial w-96 rounded-md flex flex-col  gap-2 font-semibold bg-white shadow py-4 ">
            <a
              className="hover:text-neutral-400 cursor-pointer border-l-2 border-blue-500 pl-4 py-2"
              href=""
            >
              Tweets{" "}
            </a>
            <a
              className="hover:text-neutral-400 cursor-pointer   pl-4 py-2"
              href=""
            >
              Tweets & replies{" "}
            </a>
            <a
              className="hover:text-neutral-400 cursor-pointer   pl-4 py-2"
              href=""
            >
              Media{" "}
            </a>
            <a
              className="hover:text-neutral-400 cursor-pointer   pl-4 py-2"
              href=""
            >
              Likes{" "}
            </a>
          </div>
          {/* post componenet */}
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

            <p>
              Traveling – it leaves you speechless, then turns you into a
              storyteller.
            </p>
            <div className="w-full relative h-[450px]">
              <Image
                className="rounded"
                src="/postimage.jpg"
                fill={true}
                objectFit="cover"
                alt="bla bla"
              />
            </div>

            <div className="flex  justify-end gap-4 items-center text-gray-400 px-2  py-1">
              <p className=" text-md ">
                <span className=" font-semibold">432</span> Comments
              </p>
              <p className=" text-md ">
                <span className=" font-semibold">76</span> Retweets
              </p>
              <p className=" text-md ">
                <span className=" font-semibold">789</span> Saved
              </p>
            </div>

            <div className="flex justify-between gap-4 items-center px-2 border-y-2 py-1 text-gray-500">
              <button className="flex gap-3 items-center hover:cursor-pointer hover:bg-neutral-200  p-2 px-6 rounded-md ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                Comments
              </button>
              <button className="flex gap-3 items-center hover:cursor-pointer hover:bg-neutral-200 p-2 px-6 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Retweets
              </button>
              <button className="flex gap-3 items-center hover:cursor-pointer hover:bg-neutral-200 p-2 px-6 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                Likes
              </button>
              <button className="flex gap-3 items-center hover:cursor-pointer hover:bg-neutral-200 p-2 px-6 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
                Saved
              </button>
            </div>
            {/* comments  section  */}

            <div className="flex items-center w-full  min-h-[50px] max-h-[50px] gap-2  border-b-2">
              <Image
                className="rounded"
                src="/profile1.jpg"
                height={40}
                width={40}
                alt="cover author"
              />
              <div className="flex w-full flex-col text-[14px]">
                <input type="text" placeholder="Comment on this tweet ..." className="w-full outline-none h-10 px-2 py-1  bg-neutral-200  placeholder:text-gray-500 " />
              </div>
            </div>
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
