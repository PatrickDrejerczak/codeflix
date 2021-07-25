import React from 'react';
import './styles.css';

// let trending =
// 	'https://api.themoviedb.org/3/trending/all/week?api_key=be052554f80e371720157b837ddf8d48';
//
const Header = (x) => {
	return (
		<myHeader>
			<header>
				<h1 id="logo">CodeFlix</h1>
				<div className="">
					<ul className="nav-links">
						<li>
							<a href="#">Movies</a>
						</li>
						<li>
							<a href="#">TV Shows</a>
						</li>
						<li>
							<a href="#">Lists</a>
						</li>
					</ul>
				</div>
				<nav role="navigation">
					<div id="menuToggle">
						<input type="checkbox" />
						<span></span>
						<span></span>
						<span></span>

						<ul id="menu">
							<a href="#">
								<li id="profile">My Profile</li>
							</a>
							<a href="#">
								<li id="trending">Top Trending</li>
							</a>
							<a href="#">
								<li id="genre">Genres</li>
							</a>
							<a href="#">
								<li id="popularity">Popularity</li>
							</a>
							<a href="#">
								<li id="settings">Settings</li>
							</a>
						</ul>
					</div>
				</nav>
			</header>
		</myHeader>
	);
};

export default Header;
