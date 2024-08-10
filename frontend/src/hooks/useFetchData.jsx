import { useEffect, useState } from 'react'
// import { authContext } from '../context/AuthContext';
import { token } from '../config';

const useFetchData=(url)=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true);
            try {
                const res=await fetch(url,{
                    headers:{Authorization:`Bearer ${token}`},
                })
                const result=res.json();
                if(!res.ok){
                    throw new Error(result.message+"Error");
                }
                setData(result.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
                
            }
        }
        fetchData();
    },[url])
    return {data,loading,error};
}

export default useFetchData