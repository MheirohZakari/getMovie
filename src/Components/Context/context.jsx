import { CounterContext, CounterProvider } from ".";
import { useContext } from "react";

function   Task (){

    return (
        <CounterProvider>
        <Result />

        </CounterProvider>
    )
}



const Result = () => {
 const {counter,setCounter} = useContext(CounterContext)
    return (
        <>

        <div>
        <button onClick={() => setCounter((prev)=> prev +100)}>Add 100   </button>
        <h1 style={{color:"black"}}>value={counter}</h1>
        </div>
       
        </>
    )

}


export default Task;


