import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (newName.trim() === '') {
      return 
    }

    const newPerson = {
      name: newName.trim()
    }
    
    checkExistingEntry(newPerson)
  }

  const checkExistingEntry = (person) => {
    const existingEntries = persons.map(p => p.name.toLowerCase())
    if (existingEntries.includes(person.name.toLowerCase())) {
      alert(`${person.name} is already added to phonebook`)
    } else {
      setPersons(persons.concat(person))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p => <div key={p.name}>{p.name}</div>)}
    </div>
  )
}

export default App