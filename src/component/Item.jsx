import React from 'react'

export const Item = (item) => {
  return (
    <>
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
     <h className="line-through">₹{item.old_price}</h>

      
  </div>
  
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </>
    
  )
}
