import Image from "next/image";

const Postdetails = () => {
  return (
    <>
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

            </>
  )
}

export default Postdetails
