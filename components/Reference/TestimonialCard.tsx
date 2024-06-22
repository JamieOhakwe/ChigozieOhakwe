import Image from 'next/image'
import React from 'react'

const TestimonialCard = () => {
  return (
    <>
        <div className="bg-white shadow-xl rounded-xl p-[24px] w-[300px] flex flex-col gap-0">
					
                    <span className="font-bold">“The best Webflow Templates”</span><br />
                    <span className=" text-xs font-light text-gray-500">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo
                        consequat aute irure sint amet occaecat cupidatat
                        non proident
                    </span>
                    <div className=" flex item-center justify-center gap-3 mt-5">
                        {/* image */}
                        <Image
                            src="/img/projects/user1.jpg"
                            className="rounded-[100%] "
                            height={50}
                            width={50}
                            alt="image"
                        />
                        <div className="flex flex-col gap-2">

                            <span className="font-bold text-xs">Sophia Moore</span>
                            <span className="text-xs font-thin text-gray-500" >CEO at Webflow Agency</span>
                        </div>
                    </div>
                
            </div>
    </>
  )
}

export default TestimonialCard