import styled from "styled-components";

export const Wrapper = styled.div`
    
`;


export const Content = styled.div`
    padding:20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
    color:black;
`;


export const Title = styled.div`
    color:black;

    h1{
        font-size:var(--fontSuperBig);

        @media screen and (max-width:720px){
            font-size:var(--fontBig);
        }
    }

    p{
        font-size:var(--fontMed);

        @media screen and (max-width:720px){
            font-size:var(--fontSmall);
        }
    }

    @media screen and (max-width:720px){
        max-width:100%;

    }
`;