import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons.js';
import PersonForm from './components/PersonForm.js';
import Filter from './components/Filter.js'



const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setfilter] = useState('');
  const [namesToShow, setNamesToShow] = useState([]);

  useEffect(() => {
    // console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        // console.log('promise fulfilled')
        setPersons(response.data)
        setNamesToShow(response.data)
      })
  }, [])
  // console.log('render', persons.length, 'persons')

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
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchfilter = (event) => {
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

