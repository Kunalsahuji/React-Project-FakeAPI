import React from 'react'

const Nav = () => {
    return (
        <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
            <a className='py-2 px-5 border border-blue-200 text-blue-300 rounded' href="/create">Add New Product</a>
            <hr className='my-3 w-[80%]' />
            <h1 className='text-2xl  mb-3 w-[80%]'>Category Filter</h1>
            <ul className='w-[80%]'>
                <li className='flex items-center mb-3'>
                    <span className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-100'></span> {" "}cart-1
                </li>
                <li className='flex items-center mb-3'>
                    <span className='rounded-full mr-2 w-[15px] h-[15px] bg-red-100'></span> {" "}cart-2
                </li>
                <li className='flex items-center mb-3'>
                    <span className='rounded-full mr-2 w-[15px] h-[15px] bg-yellow-100'></span> {" "}cart-3
                </li>
                <li className='flex items-center mb-3'>
                    <span className='rounded-full mr-2 w-[15px] h-[15px] bg-orange-100'></span> {" "}cart-4
                </li>
            </ul>
        </nav>
    )
}

export default Nav
