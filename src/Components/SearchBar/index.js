import React, { useState, useEffect } from "react";

import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Button,
  Col,
  Row,
} from "react-bootstrap";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      let url;
      if (query) {
        url = `https://newsapi.org/v2/everything?q=${query}&apiKey=a789c89d7c354c64afc320506517b71f`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a789c89d7c354c64afc320506517b71f`;
      }

      const data = await fetch(url);
      const result = await data.json();
      console.log(result);
    };
    getData();
  }, [query]);

  const handleInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const confirmSearch = () => {
    setQuery(searchInput);
  };

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Row className="search_box justify-content-between">
            <Col xs={12} md={8} lg={6}>
              <Navbar.Brand href="#home">Codeflix</Navbar.Brand>
            </Col>
            <Col xs={8} md={6} lg={6}>
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  size="sm"
                  value={searchInput}
                  onChange={handleInput}
                />
                <Button
                  onClick={confirmSearch}
                  variant="outline-success"
                  id="button-addon1"
                >
                  Search
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default SearchBox;
