// import React, { Component } from 'react'

// export default class Search extends Component {
//   render() {
//     return (

//       <div>
//         Hello Searchers !!

//       </div>
//     )
//   }
// }
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const searchBarStyle = {
    marginTop: '16%', // Add margin to shift the search bar down
    display: 'flex',
    borderRadius: '20px',
    overflow: 'hidden',
    width: '600px',
  };

  const inputStyle = {
    flex: '1',
    border: 'none',
    borderRadius: '20px 0 0 20px',
    padding: '20px',
    fontSize: '18px',
    color: 'black',
  };

  const buttonStyle = {
    background: 'green',
    border: 'none',
    borderRadius: '0 20px 20px 0',
    padding: '15px 30px',
    cursor: 'pointer',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
  };

  const clearButtonStyle = {
    cursor: 'pointer',
    padding: '15px',
    background: 'white',
    border: 'none',
    fontSize: '18px',
  };
  

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearClick = () => {
    setSearchText('');
  };
  // <div className='heading'>
  //     <h1>PCSB INTERACTION PORTAL</h1>
  //   </div> 

  return (
    <div style={searchBarStyle} className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search..."
        style={inputStyle}
        className="search-input"
        value={searchText}
        onChange={handleInputChange}
      />
      {searchText && (
        <button style={clearButtonStyle} onClick={handleClearClick}>
          ✖️
        </button>
      )}
      <button style={buttonStyle} className="search-button">
        {/* Optional: You can include a magnifier icon here */}
        {/* <i className="fa fa-search"></i> */}
        Search
      </button>
    </div>
  );
};

export default SearchBar;
