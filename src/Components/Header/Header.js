import React from 'react';
import './styles.css';

// let trending =
// 	'https://api.themoviedb.org/3/trending/all/week?api_key=be052554f80e371720157b837ddf8d48';
//
const Header = (x) => {
	return (
		<myHeader>
			<body>
				<header>
					<h1 id="logo">CodeFlix</h1>
					<div class="">
						<ul class="nav-links">
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
									<li>My Profile</li>
								</a>
								<a href="#">
									<li>Top Trending</li>
								</a>
								<a href="#">
									<li>Genres</li>
								</a>
								<a href="#">
									<li>Popularity</li>
								</a>
								<a href="#">
									<li>Settings</li>
								</a>
							</ul>
						</div>
					</nav>
				</header>
			</body>
		</myHeader>
	);
};

export default Header;
