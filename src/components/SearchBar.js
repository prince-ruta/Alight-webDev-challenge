import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMicrophone, faCamera } from '@fortawesome/free-solid-svg-icons';

/**
 * SearchBar component will allow users to input a search query
 * @param {Function} setResults - Function to update the search results
 * @returns {JSX.Element} The rendered component
 */
export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value && 
            user && 
            user.name && 
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className='searchBar'>
      <div className='search-icon'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className='microphone-icon'>
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
      <div className='camera-icon'>
        <FontAwesomeIcon icon={faCamera} />
      </div>
    </div>
  );
};
