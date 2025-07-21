import React from 'react'
import all_product from '../assets/all_product'
import { Item } from './Item';
export const Women = () => {
     const women_data = all_product.filter((item) => item.category === 'women'  );
  return (
<>
<div className="flex flex-col   w-screen h-screen bg-slate-400">
<div className="flex flex-col items-center justify-center mt-15 mb-20 ">
    <h1 className='text-5xl mt-10'>POPULAR IN WOMEN</h1>
</div>



<div className="flex flex-wrap gap-8 items-center justify-center">
    {
        women_data.slice(0, 4).map((item)=>{
            return   <Item  key={item} item={item.id} name={item.name} category={item.category} image={item.image} new_price={item.new_price} 
                        old_price={item.old_price} />
        })
    }
</div>



</div>
</>
  )
}
