import React, { useContext, useEffect, useState } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdow_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  const [items, setItems] = useState([]);
  useEffect(()=>{
    let data  = all_product.filter((item)=>item.category===props.category)
    setItems(data);
  }, [props.category, all_product])
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
        <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdow_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {items && items.map((item,i)=>{
            return <Item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
