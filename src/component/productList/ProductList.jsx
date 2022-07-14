import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import { products} from "../../data"

const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Creact & inspire. It's Rohan</h1>
            <p className='pl-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam aperiam quibusdam nihil impedit accusamus quisquam ea culpa pariatur nam quae nobis, vero sed ratione porro consequatur qui ipsum dolore dolorem iste?
            </p>

        </div>
        <div className="pl-list">
          {products.map((item)=>(
            <Product key={item.id} img={item.img} link={item.link}/>
          ))}

        </div>
      
    </div>
  )
};

export default ProductList;
