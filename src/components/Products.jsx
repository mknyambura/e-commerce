import React, { useEffect, useState } from 'react'
import data from '../../db.json'

const Products = ({products}) => {
    const [productItems, setproductItems] = useState([])

    useEffect(() => {
      fetch('/trending')
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then(setproductItems)
    }, [])
    
  return (
    <div className='grid grid-cols-4 items-center justify-between gap-8 px-12 py-12'>
        {data.trending.map((trending) => (
          <div key={trending.id} className='flex flex-col gap-4'>
            <div>
              <img src={trending.image} alt="" />
            </div>
            <div>
              <h1 className='text-[#383838] text-xl'>{trending.title}</h1>
              <h1 className='text-black font-bold'>${trending.price}</h1>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Products