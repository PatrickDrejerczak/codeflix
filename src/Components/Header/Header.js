import React from "react";
import "./styles.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/index.js";

// let trending =
// 	'https://api.themoviedb.org/3/trending/all/week?api_key=be052554f80e371720157b837ddf8d48';
import logo from "./logo.png";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 50){
                handleShow(true);
            }else{
                handleShow(false);
            }
            
        });
        return () => {
            window.removeEventListener("scroll",()=>{})
        }
    }, [])
  return (
    <Navbar className={`nav ${show && "nav__black"}`} variant="dark" expand="lg">
      <Link style={{ textDecoration: "none" }} as={Link} to={`/`}>
        <Navbar.Brand>
          <img
            src={logo}
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          CodeFlix
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#trending">Trending Now</Nav.Link>
          <Nav.Link href="#movie">Movie</Nav.Link>
          <Nav.Link href="#tv">TV Shows</Nav.Link>
          <Nav.Link href="#action">Action</Nav.Link>
          <Nav.Link href="#adventure">Adventure</Nav.Link>
          <Nav.Link href="#comedy">Comedy</Nav.Link>
          <Nav.Link as={Link} to={"/favorite"}>
            Favorite 
          </Nav.Link>
        </Nav>
        <SearchBar />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
