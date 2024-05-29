'use client'
import Image from "next/image";
import React, { useState } from "react";

const Section = ({}) => {
	const [more, setMore] = useState(false);
	return (
		<>
			<div className="flex flex-col-reverse md:flex-row mt-[2rem] p-[2rem] item-center justify-around ">
				{/* LEFT */}
				<div className="">
					<div className="flex flex-col">
                        <span className="text-[1.3rem] font-light text-gray-600">Hi, call me</span>
						<span className="text-[3rem] text-blue-600 font-bold"> JAMIE</span>
						<span className="text-[2rem] font-bold text-gray-500">A Fullstack App Developer</span>
						<span className="text-[1.3rem] border-b-4 font-light text-gray-500">Typescript | ReactJS | NodeJS | Mongo db </span>
                        <span className="text-gray-500 mt-5">This is where my story begins... </span>
                        <span className="text-gray-700 max-w-[34rem]"> Highly motivated and detail-oriented software develeoper with a strong foundation in web development methodologies. Eager to leverage academic knowledge and practical experience to contribute effectively to a dynamic and collaborative team while growing professionally </span>
					</div>
					<button className="bg-blue-600 text-white rounded-xl p-4 px-10 mt-4 hover:bg-blue-400 shadow-xl hover:text-blue-800 ">Learn More</button>
					<button className="border-blue-600 border text-blue-600 rounded-xl p-4 px-10 mt-4 hover:bg-blue-400 shadow-xl hover:text-blue-800 ml-5">Download Resume</button>

				</div>
				
				{/* RIGHT */}
				<div className="flex items-center justify-center">
					<Image
						src="/img/jamie_2.jpg"
						width={300}
						height={400}
						alt="pic of jamie"
                        className="rounded-full"
					/>
				</div>
			</div>
		</>
	);
};

export default Section;
