import React from "react";
import PropTypes from 'prop-types';

//componets
import Thumbs from "../Thumbs";
//Config
import { IMAGE_BASE_URL,POSTER_SIZE } from "../../API/config";
//Image
import NoImage from '../../images/no_image.jpg';
//Styles   
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({movie}) => movie && movie.directors && movie.actors &&(
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumbs 
                image={movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
                }
                clickable={false} />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{movie.directors.length > 1 ? 's' : ''}</h3>
                            {movie && movie.directors && Array.isArray (movie.directors)&& movie.directors.map(director=>(
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </div>
                    </div>
                </Text>
        </Content>
    </Wrapper>
);  

MovieInfo.propTypes = {
    movie: PropTypes.object,
    backdrop_path: PropTypes.string
}

export default MovieInfo;