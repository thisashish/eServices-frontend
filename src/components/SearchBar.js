import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?query=${searchQuery}`);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-bar">
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search city and service type"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mr-sm-2"
          style={{ flex: 0 }}
        />
        <Button variant="outline-success" onClick={handleSearch}>
          Search
        </Button>
      </Form>

      {/* Display search results */}
      {results.map((result) => (
        <div key={result._id}>
          {/* Display your search results here */}
          {/* For example: <p>{result.name}</p> */}
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
