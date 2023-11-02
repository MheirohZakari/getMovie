import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieFetch } from '../Hooks/useMovieFetch';
import BreadCrumb from '../Components/Breadcrumb';
import MovieInfo from '../Components/MovieInfo';
import MovieInfoBar from '../Components/MovieInfoBar';
import Actor from '../Components/Actor';
import Grid from '../Components/Grid';
import { IMAGE_BASE_URL } from '../API/config';
import { POSTER_SIZE } from '../API/config';
import NoImage from '../images/no_image.jpg'

const Movie = () => {
    const { movieId } = useParams();
    const { state  } = useMovieFetch(movieId)
    console.log(state)

    return (
        <div>
            {state.original_title ?
                <BreadCrumb movietitle={state.original_title} /> : ""}
            <MovieInfo movie={state} />
            <MovieInfoBar
                time={state.runtime}
                budget={state.budget}
                revenue={state.revenue} />
                

            <Grid header="Actors">
                {state && state.actors && Array.isArray(state.actors) && state.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />

                ))}
            </Grid>









        </div>
    )
};




export default Movie;