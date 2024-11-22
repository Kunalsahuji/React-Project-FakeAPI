import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loding';
import { ProductContext } from '../utils/Context';

const Details = () => {
    const [products] = useContext(ProductContext);
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    // const getSingleProduct = async () => {
    //     try {
    //         const { data } = await axios.get(/products/${id})
    //         // console.log(data)
    //         setProduct(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     getSingleProduct()
    // }, [])

    useEffect(() => {
        if (!product) {
            setProduct(products.filter((p) => p.id == id)[0])
        }
    }, [])

    return product ? (
        <div className="w-[90%] lg:w-[70%] h-[80%] flex flex-col lg:flex-row items-center m-auto p-5 gap-10 bg-gradient-to-b from-white to-gray-100 shadow-md rounded-lg overflow-x-hidden  overflow-y-auto scroll">
            <img
                className="object-contain h-[300px] w-full lg:h-[400px] lg:w-[40%] transition-transform duration-300 hover:scale-105"
                src={`${product.image}`}
                alt="Product"
            />

            <div className="w-full lg:w-[60%] flex flex-col items-start p-5">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{product.title}</h1>
                <h3 className="text-lg text-gray-500 italic mb-4">{product.category}</h3>
                <h2 className="text-2xl font-semibold text-red-500 mb-4">${product.price}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

                <div className="flex gap-4">
                    <Link
                        to={`/edit/${product.id}`}
                        className="py-2 px-6 bg-blue-100 text-blue-500 border border-blue-200 rounded transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-md"
                    >
                        Edit
                    </Link>
                    <Link
                        to={`/delete/${product.id}`}
                        className="py-2 px-6 bg-red-100 text-red-500 border border-red-200 rounded transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-md"
                    >
                        Delete
                    </Link>
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
};

export default Details;
