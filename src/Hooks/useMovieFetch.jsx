import {useState, useEffect} from "react";
import endpoint from "../API/endpoint";



export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
   


  useEffect(() =>{
    const fetchData = async () =>{
        try{
            setLoading(false)
        const movie = await endpoint.fetchMovie(movieId);
        setState(movie)

        setLoading(false)

        }catch(err){
            setError(true)
            console.log(err.message)
        }
  }
  fetchData()
},[movieId]

    
  )
   

    return {state,loading,error};
}