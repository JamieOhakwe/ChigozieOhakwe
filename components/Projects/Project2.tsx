import Image from "next/image"
import Link from "next/link"


const Project2 = () => {
  return (
    <>
    <div className="flex flex-col mb-[5rem] items-center mt-[5rem] justify-center gap-[1rem] m-[1rem]">
       
        <div className=" flex md:flex-row-reverse flex-col gap-4  ">
            <Image
            src="/img/projects/dashboard.png"
            alt="Project 1"
            width={500}
            height={300}
            className="rounded-[2rem] shadow-xl"

            />
            <div className="flex flex-col md:justify-center " >

                <span className=" font-bold text-xl ">Financial Dashboard</span>
                <span>Financial dashboard for data analysis made with <span className="bg-yellow-300">NextJs, Tailwind and Postgre SQL </span></span>
            <div>
                <Link href="https://github.com/JamieOhakwe/nextjs-dashboard">
                
                    <button className="bg-blue-600 text-white rounded-xl p-4 px-10 mt-4 hover:bg-blue-400 shadow-xl hover:text-blue-800 ">Code link</button>
                </Link>
                <Link href="https://nextjs-dashboard-sage-ten-53.vercel.app/">
                
				    <button className="bg-yellow-300 text-blue-600 rounded-xl p-4 px-10 mt-4 hover:bg-blue-400 shadow-xl hover:text-blue-800 ml-5">View Link</button>
                </Link>

                
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Project2