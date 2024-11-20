import axios from './axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()

const Context = (props) => {
    const [products, setProducts] = useState('')

    const getProducts = async () => {
        try {
            const { data } = await axios('/products')
            // console.log(data)
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <ProductContext.Provider value={[products, setProducts]}>
                {props.children}
            </ProductContext.Provider>
        </div>
    )
}

export default Context
