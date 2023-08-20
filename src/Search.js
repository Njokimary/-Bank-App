import React from 'react';

function Search({ handleSearch }) {
  const handleChange = (event) => {
    const searchTerm = event.target.value;
    handleSearch(searchTerm);
  };

  return (
    <div>
      <input type='text' placeholder='Search by description' onChange={handleChange} />
    </div>
  );
}

export default Search;