import { Button, Carousel } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import { brands, categories, featuredProducts, featuredProductsTabData } from '../../constants'
import { useNavigate, useNavigation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const trend = ["Best Sellers",
    "Just In",
    "Exclusives",
    "Best Deals"]

const Home = () => {

    const [selectedTab, setSelectedTab] = useState(1);
    const navigate=useNavigate();
    const {data,loading,error}=useFetch('/product/all');

    const newData=data?.data?.slice(0,8);
    

    return (
        <div className='w-full'>
            <div className="h-96 sm:h-80 xl:h-96 2xl:h-96 mb-10">
                <Carousel className='-z-20' slideInterval={3000}>
                    <img className='h-full w-full object-cover' src="https://media.istockphoto.com/id/985960652/photo/cricket-equipment-on-grass.jpg?s=1024x1024&w=is&k=20&c=Ba-0SEZ3w_LNRMXfs7rMfZnHva0JKzAKf2I3DrSlql4=" alt="..." />
                    <img className='h-full w-full object-cover' src="https://media.istockphoto.com/id/985960652/photo/cricket-equipment-on-grass.jpg?s=1024x1024&w=is&k=20&c=Ba-0SEZ3w_LNRMXfs7rMfZnHva0JKzAKf2I3DrSlql4=" alt="..." />
                    <img className='h-full w-full object-cover' src="https://media.istockphoto.com/id/985960652/photo/cricket-equipment-on-grass.jpg?s=1024x1024&w=is&k=20&c=Ba-0SEZ3w_LNRMXfs7rMfZnHva0JKzAKf2I3DrSlql4=" alt="..." />
                    <img className='h-full w-full object-cover' src="https://media.istockphoto.com/id/985960652/photo/cricket-equipment-on-grass.jpg?s=1024x1024&w=is&k=20&c=Ba-0SEZ3w_LNRMXfs7rMfZnHva0JKzAKf2I3DrSlql4=" alt="..." />
                </Carousel>
            </div>

            <div className='px-10 text-center'>
                <h1 className='font-semibold text-3xl mb-12'>Shop By Category</h1>
                <div className='flex gap-5 mb-20'>
                    {categories.map((ele, i) => (
                        <div key={i} className='cursor-pointer rounded-md hover:shadow-lg'>
                            <img src={ele.image} className='h-40 w-40 rounded-t-md' />
                            <h1 className='mt-1 font-semibold pb-2'>{ele.category}</h1>
                        </div>
                    ))}
                </div>

                <div className='flex gap-5'>
                    <div className='h-[300px] flex-1 border-2 border-black relative'>
                        <img className='h-full w-full' src='https://cricketershop.com/cdn/shop/files/2_cc1f86a6-da3b-4be3-87ea-7357bdc54c5e.png?v=1725009225&width=832' />
                        <div className='absolute top-[70%] left-[50%] translate-x-[-50%]'>
                            <h1 className='text-white text-2xl font-semibold mb-2'>Women Range</h1>
                            <Button className='mx-auto'>Shop Now</Button>
                        </div>
                    </div>
                    <div className='h-[300px] flex-1 border-black relative'>
                        <img className='w-full h-full' src='https://cricketershop.com/cdn/shop/files/1_d4855ad3-1df3-402c-b577-dd5e81ba3925.png?v=1725009225&width=832' />
                        <div className='absolute top-[70%] left-[50%] translate-x-[-50%]'>
                            <h1 className='text-white text-2xl font-semibold mb-2'>Junior Range</h1>
                            <Button className='mx-auto'>Shop Now</Button>
                        </div>
                    </div>
                </div>

                <div className='mt-20 border-2 border-gray-200'>
                    <img src='https://cricketershop.com/cdn/shop/files/WhatsApp_Image_2024-10-23_at_15.17.35_95b4fa27.jpg?v=1730186018&width=1920' />
                </div>
            </div>

            <div className='px-10 m-20'>
                <h1 className='font-semibold text-3xl mb-12 text-center'>Shop By brand</h1>
                <div className='flex  py-3 flex justify-evenly'>
                    {brands.map((ele, i) => (
                        <div key={i} className='h-40 w-40 cursor-pointer hover:shadow-lg'>
                            <img src={ele.image} className='w-full h-full rounded-lg' />
                        </div>
                    ))}
                </div>
            </div>

            <div className='grid grid-cols-10 bg-zinc-200'>
                <div className='col-span-2'>
                    <div className='py-10 pl-20 text-black w-fit'>
                        <h1 className='font-bold text-3xl mb-5'>FEATURED <br /> PRODUCTS</h1>
                        {featuredProducts.map((ele, index) => (
                            <h1 onClick={() => setSelectedTab(ele.id)} className={`font-semibold hover:text-blue-500 cursor-pointer ${selectedTab == ele.id ? 'text-blue-500' : ''}`}>{ele.name}</h1>
                        ))}
                    </div>
                </div>
                <div className='col-span-7 mr-5 overflow-x-auto'>
                    <div className='py-8 flex gap-5'>
                        {featuredProductsTabData[featuredProducts[selectedTab - 1].nick].map((ele: string, index: number) => {
                            // console.log(typeof (ele));
                            return <Card imgUrl={ele} />
                        })}

                    </div>
                </div>
                <div className='bg-black w-20 hover:w-full transition-all duration-300 rounded-l-lg ml-10 flex items-center justify-center justify-self-end cursor-pointer'>
                    <h1 className='text-white text-3xl font-semibold transform -rotate-90'>Shop More</h1>
                </div>
            </div>

            <div className='px-20 mb-2 mt-20 w-fit w-full'>
                <h1 className='font-semibold text-3xl mb-12 text-center'>Collections</h1>
                <div className='flex justify-between flex-wrap gap-10'>
                    {newData?.map((ele:any, i:number) => (
                        <Card key={i} imgUrl={ele.productImage} name={ele.productName} price={ele.productPrice} />
                    ))}
                </div>
                <Button onClick={()=>navigate('/items')} className='mx-auto mt-8'>Show More</Button>
            </div>
        </div>
    )
}

export default Home