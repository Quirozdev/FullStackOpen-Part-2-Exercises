import { useEffect, useState } from 'react';
import personService from './services/persons';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const PhonebookApp = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    personService.getAll().then((returnedPersons) => {
      setPersons(returnedPersons);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const person = persons.find((person) => {
      return person.name === newName;
    });

    if (person) {
      if (
        window.confirm(
          `${person.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...person, number: newPhoneNumber };
        personService
          .update(person.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) => (p.id === person.id ? returnedPerson : p))
            );
          });
      }
      return;
    }

    const newPerson = {
      name: newName,
      number: newPhoneNumber,
    };

    personService.create(newPerson).then((returnedPerson) => {
      setPersons([...persons, returnedPerson]);
      setNewName('');
      setNewPhoneNumber('');
    });
  };

  const handlePersonDeletion = ({ id, name }) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService.deletePerson(id).then(() => {
        const newPersons = persons.filter((person) => person.id !== id);
        setPersons(newPersons);
      });
    }
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
      <Persons
        persons={personsToShow}
        handlePersonDeletion={handlePersonDeletion}
      />
    </div>
  );
};

export default PhonebookApp;
