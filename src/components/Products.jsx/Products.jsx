import React from 'react'
import Product from './Product/Product'


const products = [
    {id:1, title: "Dress", description: "Dinner Dress", price: 5, image: "https://n.nordstrommedia.com/id/sr3/ca74875a-383b-4822-b382-9293bf479656.jpeg?h=365&w=240&dpr=2"},
    {id:2, title: "Lenovo", description: "Lenovo SLim i7", price: 10, image: "data:image/jpeg;base64,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"}
]

const Products = () => {
  return (

    <div className='products flex flex-row justify-center gap-4'>
        {products.map((product) => (
            <div key={product.id} className='flex flex-col '>
                <Product product={product}/>
            </div>
        ))}
    </div>
    
  )
}

export default Products