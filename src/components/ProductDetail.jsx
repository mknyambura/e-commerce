import React from 'react'

import {useParams} from "react-router-dom"

import data from '../../db.json'


const ProductDetail = () => {
    const {productId} = useParams()
    const thisProduct = data.women.find(prod => prod.id === productId)

    return (
        <div>
            <h1>{thisProduct.title}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.image}</p>
        </div>
    )
}

export default ProductDetail