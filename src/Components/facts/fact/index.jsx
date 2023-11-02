
// 
// 
// function   CounterContext (){
    // const [counter, setCounter] = useState(0);

    // return (
        // <>
        // {/* <Result counter = {counter} setCounter = {setCounter} /> */}

        // {/* </> */}
    
// }
// 
// 
// 
// const Result = ({counter,setCounter}) => {
// 
    // return (
        // <>
{/*  */}
{/*  */}
        {/* <button onClick={() => setCounter((prev)=> prev +1)}>Add 1</button> */}
        {/* <h1 style={{color:"black"}}>value={counter}</h1> */}
{/*  */}
{/*  */}
        {/* </> */}
    // )
// 
// }
// 
// 
// export default CounterContext;
// 










// import { type } from "@testing-library/user-event/dist/type";
// import React, { createContext, useReducer } from "react";
// import { useState } from "react";
// import {Content,Wrapper,Title} from "./flag.styles";




// export const Fact  = ({title}) =>{
//     return(
//         <>
//         <Wrapper >
//             <Content>
//                 <Title>
//                     <p style={{color:'black'}}>{title}</p>
//                 </Title>
//             </Content>
//         </Wrapper>
//         </>
//     )
// }




// function Product({price, quantity}) {
//     return (
//         <>
//             <p>{price}</p>
//             <p>{quantity}</p>
//         </>
//     );
// }

// {/* <Product price={200} quantity={10} /> */}


// const items = [
//     {
//         Id: 1, price: 300, quantity: 30
//     },
//     {
//         Id: 2, price: 700, quantity: 70
//     }
// ]


// function ProductList() {
//     const [products, setProducts] = useState(items);

//     return (
//         <>
//           {products.map(function(product){
//           return  <Product  price={product.price} quantity={product.quantity}/>
//           })}
//         </>
//     )

// }


// export default  ProductList;












// function Post({title,subtext,description,user}) {
//     return (
//         <>
//             <p>{title}</p>
//             <p>{subtext}</p>
//             <p>{description}</p>
//             <p>{user.name}</p>

//         </>
//     );
// }


// const items = [
//     {
//         Id: 1, text: "Lorem ipsum dolor sit.", subtext: 'Hello world',description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",user:{name:"Joy"} 
//     },
//     {
//         Id: 2, text: "Lorem ipsum dolor sit.", subtext: 'Hello world',description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",user:{name:"Doe"}
//     },
//     {
//         Id: 3, text: "Lorem ipsum dolor sit.", subtext: 'Hello world',description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",user:{name:"Cille"}
//     },
//     {
//         Id: 4, text: "Lorem ipsum dolor sit.", subtext: 'Hello world',description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",user:{name:'Drew'}
//     },
//     {
//         Id: 1, text: "Lorem ipsum dolor sit.", subtext: 'Hello world',description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",user:{name:"Laura"}
//     },
//     {
//         Id: 1, text: "Lorem ipsum dolor sit.", subtext: 'Hello world',description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",user:{name:"Max"}
//     },
//     {
//         Id: 7, text: "Lorem ipsum dolor sit.", subtext: 'Hello world',description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",user:{name:"Sam"}
//     },
//     {
//         Id: 8, text: "Lorem ipsum dolor sit.", subtext: 'Hello world',description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",user:{name:"Oma"}
//    },
//     {
//         Id: 9, text: "Lorem ipsum dolor sit.", subtext: 'Hello world',description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",user:{name:"Paul"}
//     },
//     {
//         Id: 10, text: "Lorem ipsum dolor sit.", subtext: 'Hello world',description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",user:{name:"Duke"}
//     },
//     {
//         Id: 11, text: "Lorem ipsum dolor sit.", subtext: 'Hello world',description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",user:{name:"Vivian"}
//     },
//     {
//         Id: 12, text: "Lorem ipsum dolor sit.", subtext: 'Hello world',description: "Lorem ipsum dolor sit, amet consectetur adipisicing.",user:{name:"Abdul"}
//     },



// ]


// function PostList() {
//     const [posts, setPosts] = useState(items);

//     return (
//         <>
//           {posts.map(function(post){
//           return  <Post title={post.title} subtext={post.subtext} description={post.description} user={post.user}/>
//           })}
//         </>
//     );

// }






// export default  PostList;





















// function   Task (){
//     const [counter, setCounter] = useState(0);

//     return (
//         <>
//         <Result counter = {counter} setCounter = {setCounter} />

//         </>
//     )
// }



// const Result = ({counter,setCounter}) => {

//     return (
//         <>


//         <button onClick={() => setCounter((prev)=> prev +2)}>Add 2</button>
//         <h1 style={{color:"black"}}>value={counter}</h1>


//         </>
//     )

// }


// export default Task;




// const Brand =() =>{
//     const [tab,setTab]=useState('Nike')
//     return(
//         <Tab active={tab}  setActive={setTab}/>  
//     )
// }

// const Tab = ({active,setActive}) =>{  
//   return(
//    <div >
//      <button style={{backgroundColor:'orange',color:'white',border:'none',margin:'10px 9px',padding:'4px'}} onClick={()=>setActive('Nike')}>Nike</button>
//      <button  style={{backgroundColor:'red',color:'white',border:'none',margin:'10px 9px',padding:'4px'}}onClick={()=>setActive('Addidas')}>Addidas</button>
//      <button  style={{backgroundColor:'Brown',color:'white',border:'none',margin:'10px 9px',padding:'4px'}}onClick={()=>setActive('Dior')}> Dior</button>

//     { active === 'Nike' ? 
//       <div >
//         <p style={{color:"black",paddingLeft:'10px'}}>size:40</p>
//         <p style={{color:"black",paddingLeft:'10px'}}>color:White</p>
//       </div>
//       : active ==='Addidas' ?
//       <div>
//         <p style={{color:"black",paddingLeft:'10px'}}>size:39</p>
//         <p style={{color:"black",paddingLeft:'10px'}}>color:Grey</p>
//       </div>
//       :<div>
//       <p style={{color:"black",paddingLeft:'10px'}}>size:42</p>
//       <p style={{color:"black",paddingLeft:'10px'}}>color:Pink</p>
//     </div>
//       }
//    </div>
//   )
// }




// export default Brand;

// const  ageReducer =(state,action)=>{
//   const {type,payload}=action
//   switch(type){
//      case "increamentAge":
//          return{age: state.age + 1}
//       case 'setName':
//           return{...state,name:payload}


//   }
// }

// function AgeMessage(){
//   const [state,dispatch]=useReducer(ageReducer, {age:16,name:''})
//   return(
//     <div>
//       <input type='text' onChange={(e)=> dispatch({type:'setName',payload:e.target.value})}/>
//       <button onClick ={()=> dispatch({type:"increamentAge"})} >Increament age</button>
//       <p style={{color:"black"}}>Hello {state.name?state.name :"!" } you are {state.age}!</p>
//     </div>
//   )
// }



// export default AgeMessage



// const numReducer = (state, action) => {
// const { type, payload } = action
// switch (type) {
// case 'firstNumber':
// return { ...state, firstNumber: payload }    
// case 'secondNumber':
// return { ...state, secondNumber: payload }
// case 'result': {
// if (!state.firstNumber && !state.secondNumber && !state.operator) {
// alert('Operation not possible!')
// 
// return {...state}
// }else return ({ ...state, result: calc(state.firstNumber, state.secondNumber, state.operator) })
// }
// 
// case 'operator':
// return { ...state, operator: payload }
// }
// }
// 
// function calc(firstNumber, secondNumber, operator) {
// switch (operator) {
  // case '+':
    // return parseInt(firstNumber) + parseInt(secondNumber)
  // case '-':
    // return parseInt(firstNumber) - parseInt(secondNumber)
  // case '*':
    // return parseInt(firstNumber) * parseInt(secondNumber)
  // default:
    // return 0
// }

// }
//  
// 
// 
// function Calculate() {
// const [state, dispatch] = useReducer(numReducer, { result: 0, firstNumber: '', secondNumber: '', operator: '' })
// return (
// <div>
{/* <h1 style={{color:'green',display:'flex',justifyContent:"center"}}>CALCULATOR</h1>     */ }
{/* <button style={{ borderColor: 'white', padding: "20px",backgroundColor:'green' ,color:'white'}} onClick={() => dispatch({ type: "result" })}>result : <h4>{state.result}</h4></button> */ }
{/* <br /> */ }
{/* <br/> */ }
{/* <input style={{ borderColor: 'white', padding: "10px",backgroundColor:'green' ,color:'white' }} onChange={(e) => dispatch({ type: "firstNumber", payload: e.target.value })}></input> */ }
{/* <input style={{ borderColor: 'white', padding: "10px",backgroundColor:'green' ,color:'white' }} onChange={(e) => dispatch({ type: "secondNumber", payload: e.target.value})}></input> */ }
{/* <br /> */ }
{/* <p> {state.firstNumber},{state.secondNumber},{state.operator} </p> */ }
{/* <br /> */ }
{/*        */ }
{/* <button  type= "button"style={{ borderColor: 'white',padding: '10px',backgroundColor:'green' ,color:'white' }} onClick={() => dispatch({ type: "operator", payload: '+' })}>+</button > */ }
{/* <button type= "button" style={{ borderColor: 'white',padding: '10px',backgroundColor:'green' ,color:'white' }} onClick={() => dispatch({ type: "operaror", payload: '-' })}>-</button > */ }
{/* <button type= "button" style={{ borderColor: 'white',padding: '10px',backgroundColor:'green' ,color:'white' }} onClick={() => dispatch({ type: "operator", payload: '*' })}>*</button > */ }
{/* <br /> */ }
{/*  */ }
{/* <br /> */ }
{/* <button type= "button" style={{ borderColor: 'white', padding: "20px" ,backgroundColor:'green' ,color:'white'}} onClick={() => dispatch({ type:'result' })}>=</button > */ }
{/*  */ }
    // {/* </div> */}
  // )
// }
//
//
// export default Calculate











