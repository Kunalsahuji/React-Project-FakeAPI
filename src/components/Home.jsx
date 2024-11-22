import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loding'
import axios from '../utils/axios'

const Home = () => {
    const [products] = useContext(ProductContext)
    // console.log('products: ', products)

    const [filterProducts, setFilterProducts] = useState(null)

    const { search } = useLocation()
    const category = decodeURIComponent(search.split('=')[1])
    console.log("category", category)

    const getProductsCategory = async () => {
        try {
            const { data } = await axios.get(`/products/category/${category}`)
            console.log(data)
            setFilterProducts(data)
            // console.log("setFilterProductsData: ", data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!filterProducts || category == 'undefined') setFilterProducts(products)
        if (category != 'undefined') getProductsCategory()
    }, [category, products])
    // console.log("filter products: ", filterProducts)
    return products ? (
        <>
            
            {/* <Nav /> */}

            <div className="h-full w-[85%]  p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">

                {filterProducts && filterProducts.map((p, i) => (

                    <Link
                        key={p.id}
                        to={`/details/${p.id}`}
                        className='mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center'>
                        <div className='hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
                            style={{ backgroundImage: `url(${p.image})` }}>
                        </div>
                        <h1 className='hover:text-blue-300'>{p.title} </h1>
                    </Link>
                ))}

            </div ></>
    ) : <Loading />

}

export default Home
