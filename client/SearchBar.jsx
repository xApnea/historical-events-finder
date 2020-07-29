import React from 'react';

function SearchBar(props) {

  return(
    <div>
      <h2>Search</h2>
      <form onSubmit={props.handleSearchSubmit}>
        <input type="text" onChange={props.handleSearchChange} value={props.searchTerm}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default SearchBar;