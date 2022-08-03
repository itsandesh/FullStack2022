
import { useState } from 'react';
import Persons from './components/Persons.js';
import PersonForm from './components/PersonForm.js';
import Filter from './components/Filter.js'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setfilter] = useState('')
  const [namesToShow, setNamesToShow] = useState(persons)


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
    setNamesToShow(namesToShow.concat(nameObject));
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
  const handleSearchfilter = (event) => {
    console.log(event.target.value)
    const search = (event.target.value)
    setfilter(search)
    setNamesToShow(
      persons.filter((person) => person.name.toLowerCase().includes(search))
    );
  }

  return (
    <div >
      <h2>Phonebook</h2>
      <Filter filter={filter} handleSearchfilter={handleSearchfilter} />
      <h2>add a new </h2>
      <PersonForm addContact={addContact} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons namesToShow={namesToShow} />
    </div>
  )
}
export default App

