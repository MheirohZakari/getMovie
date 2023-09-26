import React from "react";
import { useState, useEffect } from "react";
// import PostList  from "./fact";
// import Result from "./fact";
import Calculate from "./fact";




export const Facts = () => {
    const [catFacts, setCatFacts] = useState([]);


    const fetchFacts = async () => {
        try {
            const Facts = await (await fetch('https://catfact.ninja/facts')).json()
            setCatFacts(Facts.data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchFacts()
    }, [])

    // return (
    //     <>
    //         {catFacts.map(item => <Fact  title={item.fact} />)}

    //     </>
    // )
return (
    <Calculate/>
)
}

















export default Facts;