import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import googleCamera from '../image/google-camera.png';
import googleMic from '../image/google-mic.png'

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
        <img src={googleMic} alt="" className='google-mic'/>
      </div>
      <div className='camera-icon'>
        <img src={googleCamera} alt="" className='google-camera'/>
      </div>
    </div>
  );
};
