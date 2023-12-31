import React, {useState,useEffect,useRef} from "react";

//import
import searchIcon from '../../images/search-icon.svg';

//styles
import {Wrapper,Content} from './searchbar.styles';


const Search = ({setSearchTerm}) => {
    const [state,setState] = useState('');
    const initial = useRef(true);


    const onInputChange = function(event){
        setState(event.target.value)
    }
    useEffect(()=>{
        if(initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(()=>{
            setSearchTerm(state);
        },500)

        return () => clearTimeout(timer);
    },[state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />

                <input
                  type="text"
                  placeholder="Search Movie"
                  onChange={onInputChange}
                  value={state}
                />
            </Content>
        </Wrapper>
      
);
       

}


export default Search;