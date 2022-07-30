import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: ' 040-123456'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    if (persons.some((person) => person.name === newName)) {
      alert(newName + ' is already added to phonebook')
    }
    event.preventDefault()
    console.log('button clicked', event.target)
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  return (
    <div >
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <div key={person.name}> {person.name} {person.number}</div>
        ))}
      </div>

    </div>
  )
}
export default App

