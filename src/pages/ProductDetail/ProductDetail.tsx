import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import SimpleDropdown from '../../components/DropDown/SimpleDropdown';
import Modals from '../../components/Modal/Modals';


type productData = {
    imgUrl: string
}

const ProductDetail = ({ imgUrl }: productData) => {

    const [openModal,setOpenModal]=useState(false);

    const handleModal=()=>{
        setOpenModal(!openModal);
    }

    return (
        <div>
            <div className='grid grid-cols-2 p-5 gap-10'>
                <div className='h-[500px] w-full sticky top-14'>
                    <img className='h-[80%] w-[80%] mx-auto ' src={imgUrl} />
                    <div className='flex gap-5 justify-center mt-4'>
                        {Array(6).fill(0).map((_, i) => (
                            <img className='h-20 w-20' src={imgUrl} />
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium est iusto vel provident?</h1>
                    <p className='text-lg mt-4'><span className='line-through text-md mr-2 text-gray-600'>₹ 12,000</span>₹ 9,999</p>
                    <p className='text-sm text-gray-600'>(incl. of all taxes)</p>
                    <div className='flex gap-2 mt-2'>
                        {Array(3).fill(0).map((_, i) => (
                            <h1 className='p-2 bg-slate-200'>{i} size</h1>
                        ))}
                    </div>
                    <li className='mt-5 font-thin'>stock - 1 item left</li>

                    <div className='mt-6'>
                        <p className='font-thin mb-2'>Quantity</p>
                        <div className='flex gap-3 border-[1px] w-fit'>
                            <button className='hover:bg-slate-200 px-2'>-</button>
                            <h1 className='font-thin'>10</h1>
                            <button className='hover:bg-slate-200 px-2'>+</button>
                        </div>
                    </div>
                    <div className='mt-10 flex flex-col gap-2 flex-wrap'>
                        <Button outline color='gray' className='w-full'>ADD TO CART</Button>
                        <Button className='w-full'>
                            <FaRegHeart size={20} className='mr-2' />
                            ADD TO WISHLIST
                        </Button>
                    </div>
                    <SimpleDropdown title='DESCRIPTION'>
                        <div>
                            <h1>Features of SS TON Super English Willow Cricket Bat Size :</h1>
                            {Array(5).fill(0).map((_, i) => (
                                <li>information</li>
                            ))}
                        </div>
                    </SimpleDropdown>
                    <SimpleDropdown title='ADDITIONAL INFORMATION'>
                        <div className='font-thin'>
                            <p className='mb-2'><span className='font-semibold'>Manufacturer:</span> Sareen Sports Industries, SALARPUR, MAWANA ROAD Near Translam Academy Meerut Uttar Pradesh 250001</p>
                            <p className='mb-2'><span className='font-semibold'>Packer:</span> Sareen Sports Industries, SALARPUR, MAWANA ROAD Near Translam Academy Meerut Uttar Pradesh 250001</p>
                            <p className='mb-2'><span className='font-semibold'>Country Of Origin:</span> India</p>
                        </div>
                    </SimpleDropdown>
                    <div className='mt-10 flex justify-between'>
                        <img className='cursor-pointer' onClick={()=>handleModal()} src="https://cdn.shopify.com/s/files/1/0646/3222/5972/files/Easy_Returns-1.png?v=1723629862" />
                        <img className='cursor-pointer' onClick={()=>handleModal()} src='https://cdn.shopify.com/s/files/1/0646/3222/5972/files/Shipping-Delivery-1.png?v=1723629862' />
                        <img className='cursor-pointer' onClick={()=>handleModal()} src='https://cdn.shopify.com/s/files/1/0646/3222/5972/files/COD-1.png?v=1723629862' />
                        <img className='cursor-pointer' onClick={()=>handleModal()} src='https://cdn.shopify.com/s/files/1/0646/3222/5972/files/Top_Brands-1.png?v=1723629862' />
                        <img className='cursor-pointer' onClick={()=>handleModal()} src='https://cdn.shopify.com/s/files/1/0646/3222/5972/files/Authentic_Product-1.png?v=1723629862' />
                    </div>
                    <Modals openModal={openModal} handleModal={handleModal} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail