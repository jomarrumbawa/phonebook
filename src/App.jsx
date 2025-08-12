import { useState } from 'react';

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
      <div>
        filter shown with{' '}
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:{' '}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{' '}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((p) => (
        <div key={p.id}>
          {p.name} {p.number}
        </div>
      ))}
    </div>
  );
};

export default App;
