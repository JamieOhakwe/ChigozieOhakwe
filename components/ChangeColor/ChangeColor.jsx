import React, { useEffect, useState } from 'react'

const ChangeColor = () => {

    const [color, setcolor] = useState('');
    const [newData, setNewData] = useState([]);

    const handleChange = (e)=>{
            e.preventDefault();
            setcolor(e.target.value);

    };

    
    useEffect(()=>{
      async function fetchProducts(){

        try {
          const response = await fetch('https://api.escuelajs.co/api/v1/categories');
          const data = await response.json();
          console.log(data.name);
          
          setNewData(data)
        } catch (error) {
          console.log(error);
        }
      }

      fetchProducts();
    },[])

  return (
    <>
        <div className='bg-blue-100 w-[18rem] h-[22rem] mb-[2rem] flex m-auto flex-col'>
            <div className='w-full  h-full' style={{background: `${color}`}}></div>
            <input type="text"  className='w-full border rounded-full ' onChange={handleChange}/>
            <button className='w-full bg-red-500 rounded-full text-white'>Change Color</button>

            <div>
              <span>My new Products</span>
              <div>
                {newData.map((d)=>{
                  <div key={d.id}>
                    
                    <span className='bg-red-500 text-xl'>{d.name}</span>
                  </div>
                })}
              </div>
            </div>
        </div>
    </>
  )
}

export default ChangeColor