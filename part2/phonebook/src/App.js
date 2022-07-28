import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    event.preventDefault()
    const nameObject = {
      name: newName,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }
    // console.log(persons)

    setPersons(persons.concat(nameObject))
    setNewName('')
  }
  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const ShowContacts = () => {
    return (
      persons.map(person =>
        <p key={person.name} >
          {person.name}
        </p>)
    )
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ShowContacts />
    </div >
  )
}

export default App