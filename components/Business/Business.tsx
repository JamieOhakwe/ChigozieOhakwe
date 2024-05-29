
import Image from 'next/image'
import biz1 from '../../public/img/biz1.png'
import biz2 from '../../public/img/biz2.png'
import biz3 from '../../public/img/biz4.png'


const Business = () => {
        let biz = [
            {id:1, img: biz1, tag: 'Technology' },
            {id: 2, img: biz2, tag: 'Education'},
            {id: 3, img: biz3, tag: 'E-commerce'},
        ]

  return (
    <>
    <div>

        <div className='font-bold text-xl text-center'>Businesses</div>
        <div className='flex gap-[4rem] items-center justify-center hover:bg-blue-100 hover:rounded-full'>
            {biz.map((b)=>(
                <div key={b.id}>
                <Image
            src={b.img}
            alt={b.tag}
            width={200}  
            height={100} 
             
          />
                {/* <span key={b.id}>{b.tag}</span> */}
                </div>
                
            ))}
        </div>
        <div className='bg-red-600 w-full h-[5rem] '>
            <div className='bg-white rounded-xl'></div>
        </div>
    </div>
    </>
  )
}

export default Business