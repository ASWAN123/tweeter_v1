import Image from "next/image";
import { BsFillPersonPlusFill } from "react-icons/bs";

const UserCard = () => {
  return (
    <section className="relative flex items-start  justify-between gap-8 bg-white -mt-10 p-4 rounded-md shadow-md">
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

    <button className="px-6 py-2 rounded-md flex gap-2 text-white text-lg bg-[#2F80ED] ">
      <BsFillPersonPlusFill size={24} color="white" /> Follow
    </button>
  </section>
  )
}

export default UserCard
