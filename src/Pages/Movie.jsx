import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieFetch } from '../Hooks/useMovieFetch';
import BreadCrumb from '../Components/Breadcrumb';

const Movie = () => {
    const { movieId } = useParams();
    const { state, loading, error } = useMovieFetch(movieId)


    return (
        <div> Movie
            {state.original_title ?
                <BreadCrumb movietitle={state.original_title} /> : ""}

        </div>
    )

}




export default Movie;