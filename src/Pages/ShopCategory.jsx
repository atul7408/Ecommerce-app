import React from 'react'
import all_product from '../assets/all_product'
import { Item } from '../component/Item'

export const ShopCategory = (props) => {
  const filteredProducts = all_product.filter(
    (product) => product.category === props.category
  );

  return (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      {filteredProducts.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          category={item.category}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      ))}
    </div>
  );
};
