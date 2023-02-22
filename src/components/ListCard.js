export default function ListingCard(props) {
    const {id, wine, location, image, rating} = props.data

    console.log( {rating} )

    return(
        <article key={IdleDeadline}>
            <img src={image} alt={wine} />
            <h2>{wine}</h2>
            <p>{location}</p>
            {/* <details>
                <summary>Rating</summary>
                
                
                
            </details> */}
        </article>
    )
}