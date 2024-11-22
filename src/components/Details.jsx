import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loding'

const Details = () => {
    const [products, setProducts] = useState(null)
    const { id } = useParams()
    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`/products/${id}`)
            // console.log(data)
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSingleProduct()
    }, [])
        
    return products ? (
        <div className='w-[70%] flex h-full justify-between items-center m-auto p-[10%] gap-5'>

            <img className='object-contain h-[90%] w-[40%]' src={`${products.image}`} alt="Product-Image" />

            <div className='w-[80%] p-3.5' >
                <h1 className='text-4xl'>{products.title}</h1>
                <h3 className='text-zinc-400 my-5'>{products.category}</h3>
                <h2 className='text-red-300 mb-3'>{products.price} </h2>
                <p className='mb-[5%]'>
                    {products.description}
                </p>

                <Link className='mr-5 py-2 px-5 border rounded border-blue-200 text-blue-300 '> Edit
                </Link>
                <Link className='py-2 px-5 border rounded border-red-200 text-red-300 '> Delete
                </Link>
            </div>
        </div>
    ) : <Loading />
}

export default Details
