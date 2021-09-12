import PropTypes from 'prop-types'

const ReviewList = ({ reviews }) => {
    return (
        <ul>
            {reviews.map(details => {
                return <li key={details.id}>
                    <h3>{details.author}</h3>
                    <p>{details.content}</p>
                </li>
            })}
        </ul>);
};

export default ReviewList;

ReviewList.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })).isRequired,
};