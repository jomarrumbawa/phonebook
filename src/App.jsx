import { useState, useEffect } from 'react';
import personService from './services/persons';
import Filter from './components/Filter';
import Form from './components/Form';
import PersonsList from './components/PersonsList';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const getPersons = () => {
    personService.retrieve().then((res) => setPersons(res.data));
  };

  useEffect(getPersons, []);

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
    };

    if (checkExistingEntry(newPerson)) {
      alert(`${newPerson.name} is already added to phonebook`);
    } else {
      personService
        .create(newPerson)
        .then((res) => {
          setPersons(persons.concat(res.data));
          setNewName('');
          setNewNumber('');
        })
        .catch((error) => {
          alert('Error adding contact. Please try again');
        });
    }
  };

  const checkExistingEntry = (person) => {
    const existingEntries = persons.map((p) => p.name.toLowerCase());
    if (existingEntries.includes(person.name.toLowerCase())) {
      return true;
    } else {
      return false;
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
