import React from 'react'
import all_product from '../assets/all_product'
export const Product = () => {
     const product= all_product.filter((item) => item.category === 'men'  );
  return (
<>
<div className="flex flex-col   w-screen h-screen bg-slate-400">
<div className="flex flex-col items-center justify-center mt-15 mb-20 ">
    <h1 className='text-5xl mt-10'>POPULAR IN Men</h1>
</div>



<div className="flex flex-wrap gap-8 items-center justify-center">
    {
        men_data.slice(0, 4).map((item)=>{
            return(
<div className="card  shadow-sm bg-slate-100 ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" className='h-[280px] w-[250px] ' />
  </figure>
  <div className="card-body h-[200px] w-[280px]">
    <h2 className="card-title">{item.category}</h2>
  <h>{item.name}</h>
  <div className="flex flex-wrap gap-3">

  <h>₹{item.new_price}</h>
     
      
  </div>
  
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            )
        })
    }
</div>



</div>
</>
  )
}
