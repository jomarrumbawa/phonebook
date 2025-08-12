import { useState } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import PersonsList from './components/PersonsList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const personsToShow =
    filter === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  const addPerson = (event) => {
    event.preventDefault();
    if (newName.trim() === '') {
      return;
    }

    const newPerson = {
      name: newName.trim(),
      number: newNumber,
      id: persons.length + 1,
    };

    checkExistingEntry(newPerson);
  };

  const checkExistingEntry = (person) => {
    const existingEntries = persons.map((p) => p.name.toLowerCase());
    if (existingEntries.includes(person.name.toLowerCase())) {
      alert(`${person.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(person));
      setNewName('');
      setNewNumber('');
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>add a new</h2>
      <Form
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <PersonsList personsToShow={personsToShow} />
    </div>
  );
};

export default App;
