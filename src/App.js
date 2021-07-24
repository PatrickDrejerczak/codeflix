import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Page/HomePage/HomePage';
import SinglePage from './Page/SinglePage/SinglePage';
import 'bootstrap/dist/css/bootstrap.min.css';
const myKey = process.env.REACT_APP_API_KEY;

console.log(myKey);
const App = () => {
	return (
		<>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/movie/:id" component={SinglePage} />
			</Switch>
		</>
	);
};

export default App;
