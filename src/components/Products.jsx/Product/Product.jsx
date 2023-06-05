import React from 'react'


import shoppingCart from '../../../assets/shopping-cart.png'

const Product = ({product}) => {
  return (
    <div className='flex flex-col'>
      <img src={product.image} alt={product.title} width={200}/>
      <div className='mb-8 gap-4'>
        <h1 className='product-title'>{product.title}</h1>
        <p>{product.description}</p>
        <h1>$ {product.price}</h1>
      </div>
      <div>
        <button>
            Add to Cart
            <img src={shoppingCart} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Product