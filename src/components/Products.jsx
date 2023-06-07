import React, { useEffect, useState } from 'react'
import data from '../../db.json'
import { Link } from 'react-router-dom'

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
              <Link to={`/trending/${trending.id}`} className='text-[#383838] text-xl'>{trending.title}</Link>
              <h1 className='text-black font-bold'>${trending.price}</h1>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Products