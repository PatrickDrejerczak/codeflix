import React, { useState } from "react";
import { Link } from "react-router-dom";

import { InputGroup, FormControl, Button } from "react-bootstrap";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <InputGroup style={{ width: "20vw" }}>
      <FormControl
        type="text"
        className="mr-sm-2"
        placeholder="Keywords"
        value={searchInput}
        onChange={handleInput}
        width="40px"
      />
      <Link to={`/search/${searchInput}`}>
        <Button variant="danger" id="button-addon1">
          Search
        </Button>
      </Link>
    </InputGroup>
  );
};

export default SearchBox;
