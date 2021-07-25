import React from 'react';
import './styles.css';
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
// let trending =
// 	'https://api.themoviedb.org/3/trending/all/week?api_key=be052554f80e371720157b837ddf8d48';
import logo from "./logo.png";
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<Navbar className="nav-bar" bg="dark" variant="dark" expand="lg">
			<Link style={{ textDecoration: "none" }} as={Link} to={`/`}><Navbar.Brand>
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
				</Nav>

				<Form inline>
					<FormControl type="text" placeholder="Movie..." />
					<Button variant="danger" className="mx-1">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
