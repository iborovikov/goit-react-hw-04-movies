const MoviesPageForm = ({onSubmit, inputText, handleInputChange}) => {
    return (
        <form onSubmit={onSubmit}>
                    <input type="text" value={inputText} onChange={handleInputChange}></input>
                    <button type="submit">Search</button>
                </form>
    )
}
export default MoviesPageForm