"use client";
import React, { useState } from "react";
import { skills } from "../data/striptData";
import Image, { StaticImageData } from "next/image";
// import Test from "./test";
// import ChangeColor from "../ChangeColor/ChangeColor";
// import nodeLogo from '../../public/nodeLogo.png'
// import nodeLogo from '../../public/img/nodeLogo.png'
import reactLogo from "../../public/img/reactLogo.png";
import mongodbLogo from "../../public/img/mongodbLogo.jpg";
import tailwindLogo from "../../public/img/tailwindLogo.png";
import typescriptLogo from "../../public/img/typescriptLogo.png";
import nextjsLogo from "../../public/img/nextjsLogo.png";
import nestjsLogo from "../../public/img/nestjsLogo.jpg";
import nodeLogo from "../../public/img/nodeLogo.png";
import { IoMdArrowForward } from "react-icons/io";

// interface skillsProps {
// 	image: StaticImageData;
// }

const Skills = () => {
	const skills = [
		{
			id: 1,
			image: reactLogo,
			label: "React",
		},
		{
			id: 2,
			image: typescriptLogo,
			label: "Typescript",
		},
		{
			image: mongodbLogo,
			label: "MongoDB",
			id: 3,
		},
		{
			image: nestjsLogo,
			label: "NestJS",
			id: 4,
		},
		{
			image: nextjsLogo,
			label: "NextJS",
			id: 5,
		},
		{
			image: tailwindLogo,
			label: "Tailwind",
			id: 6,
		},
	];

	return (
		<>
			<div className="bg-blue-100 relative p-[2rem] flex flex-wrap justify-center items-center gap-8">
				<span className="font-bold md:text-xl text-blue-600">Tech Stack</span>
				<IoMdArrowForward className="text-blue-600" />

				{skills.map((s) => (
					<div key={s.id} className="">
						<Image
							src={s.image}
							alt="logo"
							width={100}
							height={100}
						/>
						<span>{s.label}</span>
					</div>
				))}
			</div>

			{/* <Test/>
			<ChangeColor /> */}
		</>
	);
};

export default Skills;
