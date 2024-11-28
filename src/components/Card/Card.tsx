import React from 'react'
import { useNavigate } from 'react-router-dom'

type urlType={
    imgUrl:string,
    name:string,
    price:number
}
const Card = ({imgUrl,name,price}:urlType) => {

    const navigate=useNavigate();

    return (
        <div onClick={()=>navigate('/details')} className='p-6 hover:shadow-lg border-2 border-gray-300 rounded-md shadow-gray-400 cursor-pointer'>
            <div className='w-52 h-52 mb-4'>
                <img className='rounded-md' src={imgUrl} />
            </div>
            <hr></hr>
            <div className='mt-4'>
                <h1 className='font-semibold'>{name}</h1>
                <h1 className='font-bold'><span className='line-through text-gray-400'>₹{price+3000} </span> ₹{price}</h1>
            </div>
        </div>
    )
}

export default Card