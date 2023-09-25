const Persons = ({ persons, handlePersonDeletion }) => {
  return (
    <>
      {persons.map((person) => {
        return (
          <div key={person.id}>
            <p>
              {person.name} {person.number}
            </p>
            <button onClick={() => handlePersonDeletion(person)}>delete</button>
          </div>
        );
      })}
    </>
  );
};

export default Persons;
