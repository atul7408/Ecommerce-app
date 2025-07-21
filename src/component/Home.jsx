import React from 'react'
import Home_img from '../assets/hero_image.png'


export const Home = () => {
  return (
   <>
 


   <div className="Container flex flex-wrap  w-full h-screen bg-slate-400 gap-10">
  <div className="flex flex-col mt-20 m-20 p-20">
 <h1 className='text-2xl '>New Arrivals only</h1>
 <h1 className='text-7xl  font-semibold line-clamp-3'>New <br /> Collections for <br /> Everyone</h1>

<div className="mt-15 m-15 p-10">
     <button className="btn btn-secondary ">Latest Collections</button>
</div>

  </div>


<div className="items-center justify-center  h-4">
    <img src={Home_img} alt=''   className="w-[450px] h-[700px] object-contain" />
</div>
  
   </div>
 
   </>
  )
}
