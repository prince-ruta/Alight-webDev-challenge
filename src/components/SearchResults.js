import React from 'react';
import "./SearchResults.css";

/**
 * @param {Object[]} results - Array of search results to display
 * @returns {JSX.Element} The rendered SearchResults component
 */
export const SearchResults = ({ results }) => {
  return (
    <div className='results-list'>
      {results.map((result, id) => {
        return (
          <div
            key={id}
            className='search-results-list'
            onClick={(e) => alert(`You Clicked on ${result.name}`)}
          >
            {result.name}
          </div>
        );
      })}
    </div>
  );
};
