import PropTypes from 'prop-types'

const MoviesPageForm = ({ onSubmit, inputText, handleInputChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={inputText} onChange={handleInputChange}></input>
            <button type="submit">Search</button>
        </form>
    );
};
export default MoviesPageForm

MoviesPageForm.propTypes = {
    inputText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
};