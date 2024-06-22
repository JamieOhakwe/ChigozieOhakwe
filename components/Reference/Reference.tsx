import Image from "next/image";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const Reference = () => {
	return (
		<>
			<div className="bg-sky-100 m-[3rem] p-[2rem]">
				<div className="flex flex-col gap-4">
					<div className="flex items-center ">
						<div className="bg-red-500 w-[2rem] h-[2px]"></div>
						<h1 className="text-[#F63D68]">Testimonials</h1>
					</div>
					<span className="font-bold mb-5 text-xl">Our Customer&lsquo; Testimonies</span>
				</div>
                <div className="flex gap-3 md:flex-row flex-col">

                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                </div>
			</div>
		</>
	);
};

export default Reference;
