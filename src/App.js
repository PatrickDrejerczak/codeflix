import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Page/HomePage/HomePage';
import MovieDetailPage from './Page/MovieDetailPage/MovieDetailPage';
import TVDetailPage from './Page/TVDetailPage/TVDetailPage';
const myKey = process.env.REACT_APP_API_KEY;

console.log(myKey);
const App = () => {
	return (
		<>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/movie/:id" component={MovieDetailPage} />
				<Route path="/tv/:id" component={TVDetailPage} />
			</Switch>
		</>
	);
};

export default App;
