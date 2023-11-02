import React from "react";
import {useHomeFetch} from "../Hooks/useHomeFetch";
import {BACKDROP_SIZE,IMAGE_BASE_URL, POSTER_SIZE} from "../API/config";
import Search from "../Components/Search";
import Grid from "../Components/Grid";
import Banner from "../Components/Banner";
import Thumb from "../Components/Thumbs";
import  Spinner  from "../Components/Spinner"; 

const Home =()=>{
    

    const{state,dispatch} =useHomeFetch();
   console.log(state)
    if(state.error)return <div>Something went wrong!!</div>
        

    return (       
    <>
     {state && !state?.searchTerm && state?.movies.results[0] ?
     <Banner
     image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.movies.results[0].backdrop_path}`}
     title={state.movies.results[0].original_title}
     text={state.movies.results[0].overview}
    />
    :null
     }
     <Search dispatch={dispatch }/>
     
     {state.loading &&
     <Spinner/>
    
     }
     <Grid header={state.searchTerm ?'Here are your search results!!':'popular movies'}>
     {
        state.movies.results.map(movie =>
            <Thumb clickable
            image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path :""}
            movieId={movie.id}
            />
            )
     }
     </Grid>
    
     

     </>
)
}

export default Home;