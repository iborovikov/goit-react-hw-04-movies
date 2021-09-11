const ReviewList = ({reviews}) => {
    return (
        <ul>
            {reviews.map(details => {
                return <li key={details.id}>
                    <h3>{details.author}</h3>
                    <p>{details.content}</p>
                </li>
            })}
        </ul>);
    
}

export default ReviewList