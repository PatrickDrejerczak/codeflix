import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  const handleInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Row className="search_box justify-content-between">
            <Col xs={12} md={8} lg={6}>
              <Navbar.Brand>Codeflix</Navbar.Brand>
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
                <Link to={`/search/${searchInput}`}>
                  <Button variant="outline-success" id="button-addon1">
                    Search
                  </Button>
                </Link>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default SearchBox;
