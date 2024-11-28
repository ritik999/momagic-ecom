import { useEffect, useState } from "react"

type fetchDataType={
    api:string,
    methodType:string,
    payload?:any
}

// export const useFetch=()=>{
//     const [loading,setLoading]=useState(false);
//     const fetchData=async({api,methodType,payload=''}:fetchDataType)=>{
//         try {
//             setLoading(true);
//             const res=await fetch(`http://localhost:8000/api${api}`,{
//                 method:`${methodType.toUpperCase()}`,
//                 headers:{'Content-Type':'application/json'},
//                 body:JSON.stringify({payload})
//             })

//             const data=await res.json();

//             if(!data.success) throw new Error(data.message);
//             return data;
//         } catch (error:any) {
//             console.log(error.message);    
//         }finally{
//             setLoading(false);
//         }
//     }

//     return {loading,fetchData}
// }

export const useFetch=()=>{
    const [data,setData]=useState<any>(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    // useEffect(()=>{
        const fetchData=async(url:string,options:any={})=>{
            setLoading(true);
            setError(null);
            try {
                const res=await fetch(`http://localhost:8000/api${url}`,options);

                if(!res.ok) throw new Error('Network response was not ok');
                const result=await res.json();
                return result
            } catch (error:any) {
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
    //     fetchData();
    // },[]);

    return {data,loading,error,fetchData};
}