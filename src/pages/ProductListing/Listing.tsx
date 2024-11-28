import React, { useEffect, useMemo, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Card from '../../components/Card/Card'
import { useFetch } from '../../hooks/useFetch'

const Listing = () => {
    const { data, loading, error, fetchData } = useFetch();
    const [price, setPrice] = useState<number | null>(null);
    const [fetchedData, setFetchedData] = useState([]);
    // const filterData = async(price: string) => {
    //        const responseResult= await fetchData('/product/all',{
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ price }),
    //         })

    // }

    const getPrice = (range: string) => {
        setPrice(Number(range));
    }

    useEffect(() => {
        fetchData('/product/all', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ maxPrice:price }),
        }).then((data) => console.log(data)
        )

        // fetchData().then((res)=>res.json()).then((data)=>setFetchedData(data)); 
    }, [price]);



    // useEffect(() => {
    //     filterData()
    // }, []);




    if (loading) return <h2>loading...</h2>

    return (
        <div className='flex relative'>
            <Sidebar filterData={getPrice} />
            <div className='px-8 py-5 flex flex-wrap w-full gap-4'>
                {data?.map((ele: any, i: number) => (
                    <Card key={i} imgUrl={ele.productImage} name={ele.productName} price={ele.productPrice} />
                ))}

            </div>
        </div>
    )
}

export default Listing