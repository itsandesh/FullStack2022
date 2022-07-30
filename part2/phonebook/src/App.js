import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addContact = (event) => {
    if (persons.some((person) => person.name === newName)) {
      alert(newName + ' is already added to phonebook')
    }
    event.preventDefault()
    console.log('button clicked', event.target)
    event.preventDefault()
    const nameObject = {
      name: newName,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div key={persons.name}>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <input
          value={newName}
          onChange={handleNameChange}
        />
        <div>
          <button type="submit">add</button>

        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <div key={person.name}> {person.name} </div>
        ))}
      </div>

    </div>
  )
}

export default App

