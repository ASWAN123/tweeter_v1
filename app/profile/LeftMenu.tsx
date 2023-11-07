

const LeftMenu = () => {
  return (
    <div className="flex-initial w-96 rounded-md flex flex-col  gap-2 font-semibold bg-white shadow py-4  h-fit ">
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
  )
}

export default LeftMenu
