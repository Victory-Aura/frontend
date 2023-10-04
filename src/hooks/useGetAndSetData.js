import { useState,useEffect } from "react"


export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (err){
            setError(err.message);
            console.log(err.message)
        } finally {
            setIsLoading(false);
        }
    }
    return [fetching,isLoading,error]
}


export const useGetAndSetData = (callback) => {
    const [Data,setData, ] = useState([])
    const [ fetchingData, isLoading,Err] = useFetching(async () => {
        const data = await callback()
        setData(data.data)
        })
    useEffect(()=>{
        fetchingData()
    },[])
    return [Data,setData, isLoading,Err]
}

export default useGetAndSetData;
