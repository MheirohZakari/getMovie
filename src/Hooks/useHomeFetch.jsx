import { useState, useEffect, useReducer } from "react";
import endpoint from "../API/endpoint";

//API

//Helpers      
// import {isPersistedState} from '../helpers' 

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}
const reducerState = {
    searchTerm: '',
    loading: false,
    error: false,
    movies: initialState,
    isLoadingMore: false
}

export const actions = { reset: 'RESET', movies_loading: 'movies/loading', movies_successful: "movies/successful", movies_error: 'movies/error', movies_searchTerm: 'movies/serchTerm' }
const movieReducer = (state = reducerState, action) => {
    const { type, payload } = action
    switch (type) {
        case actions.reset:
            return { ...state, movies: initialState }
        case actions.movies_loading:
            return { ...state, error: false, loading: true }
        case actions.movies_successful:
            return { ...state, loading: false, movies: payload }
        case actions.movies_error:
            return { ...state, error: true, loading: false }
        case actions.movies_searchTerm:
            return { ...state, error: false, searchTerm: payload }
        default:
            return state
    }
}





export const useHomeFetch = () => {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [state, setState] = useState(initialState);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    // const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [state, dispatch] = useReducer(movieReducer, reducerState)

    const fetchMovies = async (page, searchTerm = '') => {
        console.log('fetchMovies')
        try {
            dispatch({ type: actions.movies_loading })

            // 
            const movies = await endpoint.fetchMovies(searchTerm, page);
            console.log('inside', movies)
            // setState(prev => ({
            //     ...movies,
            //     results:
            //         page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            // }));
            const newMovies = { ...state.movies, results: page > 1 ? [...state.movies.results, ...movies.results] : [...movies.results] };
            console.log({ newMovies })
            dispatch({ type: actions.movies_successful, payload: newMovies })
        } catch (err) {
            dispatch({ type: actions.movies_error })
        }
        // setLoading(false);

    }

    //Initial render and search

    useEffect(() => {
        // if(!searchTerm){
        //     const sessionState = isPersistedState('homeState');

        //     if(sessionState){
        //         setState(sessionState);
        //         return;
        //     }
        // }
        // setState(initialState);
        console.log('name')
        dispatch({ type: actions.reset })
        fetchMovies(1, state.searchTerm);
    }, [state.searchTerm]);






    //Laod More
    // useEffect(() => {
    // if (!isLoadingMore) return;
    // fetchMovies(state.page + 1, searchTerm);
    // setIsLoadingMore(false);
    // }, [isLoadingMore, searchTerm, state.page]);


    //write to sessionStorage
    // useEffect(()=>{
    //     if(!searchTerm) sessionStorage.setItem('homeState',JSON.stringify(state))
    // },[searchTerm,state]);


    return { state, dispatch };
}




