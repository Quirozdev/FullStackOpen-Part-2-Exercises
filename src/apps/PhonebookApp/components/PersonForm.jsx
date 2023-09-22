const PersonForm = ({
  handleAddPerson,
  nameValue,
  handleNameChange,
  phoneNumberValue,
  handlePhoneNumberChange,
}) => {
  return (
    <form onSubmit={handleAddPerson}>
      <div>
        name:
        <input value={nameValue} onChange={handleNameChange} />
      </div>
      <div>
        number:
        <input value={phoneNumberValue} onChange={handlePhoneNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
