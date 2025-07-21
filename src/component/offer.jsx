import React from 'react'
import offer_img from '../assets/banner_mens.png'
import img from '../assets/banner_kids.png'
export const Offer = () => {
  return (
    <>
  <div className=" flex flex-wrap items-center justify-center  bg-slate-400 overflow-hidden ">
    
   
  <div className=" card  image-full w-screen h-1/2  p-20 overflow-hidden">
  <figure>
    <img
      src={offer_img}
      alt="" />
  </figure>
  
</div>
<div className=" card  image-full w-screen h-1/2 shadow-sm p-20 ">
  <figure>
    <img
      src={img}
      alt="" />
  </figure>
  
</div>

</div>
    </>
  )
}
