import styled from "styled-components";

export const  Container= styled.div` 
      display:flex;
      min-height:100vh;
      max-width:900px;
      margin:0 auto;
      padding-left:26px;
      padding-top:42px;
      background-color:whitesmoke;
      box-shadow:0px 25px 20px rgba(0,0,0,10%)
`;
export const  Aside= styled.aside` 
      flex: 0 0 25%;
      min-height:100vh;
      background-color: yellow;
      

`
export const  Main= styled.section` 
       flex:1 ;
      min-height:100vh;
      background-color: white;
      padding-top:24px;

      .description{
            padding-left:24px;
            text-transform:uppercase;
     
      .herotext{
            font-size:56px;
      }
      .p{
            font-size:17px;
      }

}
`;
export const Headings =  styled.h3`
text-transform:uppercase;
margin-bottom:15px;
margin-top:30px;
padding-left:30px;

span{
      display:block;
      max-width:24px;
      margin-top:5px;
      height:3px;
      background-color:black;
}
`
export const  Beside = styled.section` 
       flex:0 0 25% ;
      min-height:100vh;
      background-color: black;
      color:white;


`
export const  Behind = styled.section` 
       flex:0 0 25% ;
      min-height:45vh;
      background-color: yellow;
      border-left:1px solid black;
      color:black;
      width:125%;


`

export const Heading3 = styled.h2 `
       text-transform: uppercase;
       span{
            display: block;
            width: 10%;
            margin-top: 5px;
            height: 4px;
            background-color: white;
            
       }
`
export const  Bottom = styled.section` 
       flex:0 0 25% ;
      min-height:45vh;
      background-color: white;
      color:black;
      width:125%;
      h5{
            margin-top:20px;
            margin-bottom:20px;
       }
       ul{
             padding-left:10px;
             padding-bottom:40px;
             color:gray;
             font-style:italic;

       }


`

export const Heading = styled.h2 `
       text-transform: uppercase;
       span{
            display: block;
            width: 10%;
            margin-top: 5px;
            height: 4px;
            background-color: black;
            
       }
`
export const Heading2 = styled.h4 `
text-transform:uppercase;
`
export const Body1 = styled.p `
font-size:14px;
text-transform:capitalize;
`
export const Body2 = styled.p `
font-size:13px;
text-transform:capitalize;
`
export const Slugline = styled.small`
font-size:12px;
text-transform:capitalize;
`
