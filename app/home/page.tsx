import Addnewpost from "../componenets/Addnewpost";
import Trends from "../componenets/Trends";
import Post from "../profile/Post";
import  { BiImageAlt , BiWorld } from "react-icons/bi"
const page = () => {
    return (

            <main className="container mx-auto  flex  gap-4 py-4">
                <section className="w-[70%]  flex flex-col gap-12 ">
                    <Addnewpost />

                    <div className="flex  flex-col gap-4">
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </section>
                <aside className="w-[30%] flex flex-col gap-6">
                    <Trends />

                </aside>
            </main>

    );
};

export default page;
