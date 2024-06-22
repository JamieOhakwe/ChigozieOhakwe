import Image from "next/image"
import Link from "next/link"


const Project3 = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center gap-[1rem] m-[1rem]">
        <div className=" flex md:flex-row flex-col gap-4  ">
            <Image
            src="/img/projects/school-app.png"
            alt="Project 1"
            width={500}
            height={300}
            className="rounded-[2rem]"

            />
            <div className="flex flex-col md:justify-center " >

                <span className=" font-bold text-xl ">School Application</span>
                <span>A school application made with <span className="bg-yellow-300">NextJs, Tailwind and MongoDB </span></span>
            <div>
                <Link href="https://github.com/JamieOhakwe/interiordesign">
                
                    <button className="bg-blue-600 text-white rounded-xl p-4 px-10 mt-4 hover:bg-blue-400 shadow-xl hover:text-blue-800 ">Code link</button>
                </Link>
                <Link href="https://interiordesign-drab.vercel.app/">
                
				    <button className="border-blue-600 border text-blue-600 rounded-xl p-4 px-10 mt-4 hover:bg-blue-400 shadow-xl hover:text-blue-800 ml-5">View Link</button>
                </Link>

                
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Project3