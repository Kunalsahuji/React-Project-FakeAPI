import React, { useState } from 'react'

const Create = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e) => {
        try {
            e.preventDefault()
            const product = {
                title, image, category, price, description
            }
            console.log(product)

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <form
            onSubmit={submitHandler}
            className='flex flex-col items-center p-[5%] w-screen h-screen bg-slate-400'>
            <h1 className='text-3xl w-1/2 mb-5 text-center'>Add New Product</h1>
            <input type="url"
                placeholder='Image'
                className=' bg-zinc-50 rounded p-3 w-1/2 mb-3'
                onChange={(e) => setImage(e.target.value)}
                value={image}
            />
            <input type="text"
                placeholder='title'
                className=' bg-zinc-50 rounded p-3 w-1/2 mb-3'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <input type="text"
                placeholder='Category'
                className=' bg-zinc-50 rounded p-3 w-1/2 mb-3'
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />
            <input type="number"
                placeholder='price'
                className=' bg-zinc-50 rounded p-3 w-1/2 mb-3'
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />
            <textarea type="text"
                placeholder='enter product description here...'
                rows='5'
                className=' bg-zinc-50 rounded p-3 w-1/2 mb-3'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <button className='rounded border px-12 py-3  bg-transparent'>Add</button>
        </form>
    )
}

export default Create
