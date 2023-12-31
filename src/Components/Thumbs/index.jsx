import React from "react";
import {Image} from "./thumbs.styles";




const Thumbs =({image,movieId,clickable})=>(
    <div>
        {clickable ?(
            <a href={`/${movieId}`}>
                <Image src={image} alt ="movie-thumb"/>
            </a>
        ) :(
            <Image src={image} alt ="movie-thumb"/>
        )
       
    }
    </div>
)
export default Thumbs;