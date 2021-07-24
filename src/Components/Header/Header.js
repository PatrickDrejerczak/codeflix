import React from 'react';
import './styles.css';
let trending =
	'https://api.themoviedb.org/3/trending/all/week?api_key=be052554f80e371720157b837ddf8d48';
//
const Header = (x) => {
	return (
		<myHeader>
			<body>
				<header>
					<h1 id="logo"> CodeFlix</h1>
					<nav>
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
					</nav>
					<div class="container">
						<nav class="navigation">
							<button class="hamburger-menu">
								<div class="line line-1"></div>
								<div class="line line-2"></div>
								<div class="line line-3"></div>
							</button>
							<div class="bg-cover"></div>
							<ul class="nav-list">
								<li class="nav-item">
									<a href="#" class="nav-link">
										My Profile
									</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link">
										Top Trending
									</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link">
										Genres
									</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link">
										Popularity
									</a>
								</li>
								<li class="nav-item">
									<a href="#" class="nav-link">
										Settings
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</header>
			</body>
		</myHeader>
	);
};

export default Header;

// function sideBar() {
// 	let x = document
// 		.querySelector('.hamburger-menu')
// 		.addEventListener('click', () => {
// 			document.querySelector('.navigation').classList.toggle('change');
// 		});
// 	document.body.appendChild(x);
// }
// sideBar();
