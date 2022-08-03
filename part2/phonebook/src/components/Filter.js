const Filter = ({ filter, handleSearchfilter }) => {
    return (
        <div>
            filter shown with <input
                value={filter}
                onChange={handleSearchfilter} >
            </input>
        </div>
    )
}
export default Filter