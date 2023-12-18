import { useEffect, useState } from 'react'

const useFetch = (url) => {
 const [data, setData]= useState([]);
 const [isLoading, setIsLoading]=useState(true);
 const [error, setError]= useState(null);

 useEffect(() => {
   fetch(url).then((res)=>{
    if(!res.ok){
     throw Error('Data fetching is in problem');
    }
    return res.json();
   }).then((data)=>{
   setData(data);
   setIsLoading(false);
   setError(null);
   }).catch((error) =>{
    setError(error.message);
    setIsLoading(false);
   });
 }, [url]);

 return {data, isLoading, error }
 
}

export default useFetch