export default function ListingCard(props) {
    const {wine, location, image, rating} = props.data

    console.log( {rating} )

    return(
        <article>
            <img src={image} alt={wine} />
            <h2>{wine}</h2>
            <p>{location}</p>
            {/* <details>
                <summary>Rating</summary>
                
                
                
            </details> */}
        </article>
    )
}