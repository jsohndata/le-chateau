import { useState, useEffect } from "react"
import ListingCard from "./ListCard.js"

export default function List() {
    const [data, setData] = useState()
    const [attribute, setAttribute] = useState('whites')

    useEffect( ()=>{        
        fetch(`https://api.sampleapis.com/wines/${attribute}`)
            .then(res => res.json())
            .then(setData)
            .catch(err => console.err(err))
        },[attribute])
    
    console.log( {data} )

    return(
        <>
            <header>
                <h1>Le Château</h1>
                                
                <nav>
                    <button onClick={ ()=> setAttribute("whites") }>Blanc</button>
                    <button onClick={ ()=> setAttribute("reds") }>Rouge</button>
                    <button onClick={ ()=> setAttribute("port") }>Port</button>
                </nav>
            </header>

            <section>
            {!data 
            ? (<></>) 
            : (data.map( (element) => {
                return <ListingCard data={element} />})
            )}
            </section>
        </>
    )
}