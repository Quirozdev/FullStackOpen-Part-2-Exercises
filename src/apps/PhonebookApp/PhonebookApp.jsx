import { useState } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const PhonebookApp = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);

  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [filterByName, setFilterByName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const isNameAlreadyUsed = persons.some((person) => {
      return person.name === newName;
    });

    if (isNameAlreadyUsed) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons([
      ...persons,
      {
        name: newName,
        number: newPhoneNumber,
        id: persons.length + 1,
      },
    ]);

    setNewName('');
    setNewPhoneNumber('');
  };

  const handleSearchChange = (event) => {
    setFilterByName(event.target.value);
  };

  const personsToShow =
    filterByName === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filterByName.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterByName} handleSearchChange={handleSearchChange} />
      <h2>add a new</h2>
      <PersonForm
        handleAddPerson={addPerson}
        nameValue={newName}
        handleNameChange={handleNameChange}
        phoneNumberValue={newPhoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default PhonebookApp;
