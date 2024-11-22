import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
    const [products] = useContext(ProductContext)
    const { search, pathname } = useLocation()

    let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], [])
    distinct_category = [...new Set(distinct_category)]
    // console.log(distinct_category)
    const color = () => {
        return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4 )`
    }
    // console.log(color())
    return (
        <>
            {search || pathname != '/' ? <Link to={'/'} className='bg-zinc-200 px-4 py-2 border top-5 left-[16.5%] rounded absolute'>Home</Link> : ""
            }
            <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
                <a className='py-2 px-5 border border-blue-200 text-blue-300 rounded' href="/create">Add New Product</a>
                <hr className='my-3 w-[80%]' />
                <h1 className='text-2xl  mb-3 w-[80%]'>Category Filter</h1>
                <div className='w-[80%]'>
                    {distinct_category.map((c, i) => (
                        <Link
                            key={i}
                            to={`/?category=${c} `} className='flex items-center mb-3'>
                            <span style={{ backgroundColor: color() }} className='rounded-full mr-2 w-[15px] h-[15px]'></span> {" "}
                            {c}
                        </Link >
                    ))}

                </div>
            </nav>
        </>
    )
}

export default Nav
