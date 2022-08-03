
const PersonForm = ({ addContact, newName, newNumber, handleNameChange, handleNumberChange }) => {
    return (
        <div>
            <form onSubmit={addContact}>
                name: <input
                    value={newName}
                    onChange={handleNameChange}
                /><br></br>
                number:<input
                    value={newNumber}
                    onChange={handleNumberChange}
                />
                <div>
                    <button type="submit">add</button>
                </div>
            </form>

        </div>
    )
}
export default PersonForm