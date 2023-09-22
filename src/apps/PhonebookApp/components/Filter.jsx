const Filter = ({ value, handleSearchChange }) => {
  return (
    <div>
      filter shown with
      <input value={value} onChange={handleSearchChange} />
    </div>
  );
};

export default Filter;
