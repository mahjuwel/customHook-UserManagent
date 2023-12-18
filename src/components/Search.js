import React, { useEffect, useState } from 'react'

 const Search = (props) => {
  const [searchText, setSearchText]= useState("");
  
    useEffect(() => {
      props.onSearch(searchText);
    }, [searchText])
  
    const handleChange = (e) => {
      setSearchText(e.target.value);
    };
  return (
    <div>
      <input
        type="text"
        name="searchText"
        placeholder="Search by name"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};
export default Search