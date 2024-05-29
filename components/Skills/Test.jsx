import React, { useState } from "react";

const Test = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Jamie');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = [title, body, author];
        console.log(blog);
    }

	// function changeText(event) {
	// 	setChange(event);
	// }

	return (
		<>
            <div className="w-[380px] flex flex-col ml-[4rem]">

                <form action="submit" onSubmit={handleSubmit}>
                    <label htmlFor="">Title</label>
                    <input type="text" className="bg-gray-200 w-full" onChange={(e)=>{setTitle(e.target.value)}} />
                    <label htmlFor="">Body</label>
                    <textarea onChange={(e)=>{setBody(e.target.value)}} className="bg-gray-200 w-full border">
                        
                    </textarea>
                    <label htmlFor="">Author</label>
                    <select value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                        <option >Jamie</option>
                        <option >Ohakwe</option>
                    </select>
                    <button className="bg-red-500  px-[2rem] py-[1rem] ">Submit blog</button>

                </form>
                    <div className="text-red-500 text-xl font-bold">{title}</div>
                    <div className="text-red-500 text-xl font-light">{body}</div>
                    <div className="text-red-500 text-md font-light">{author}</div>
            </div>
			{/* <div>{}</div> */}
		</>
	);
};

export default Test;
