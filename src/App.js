import { Switch, Route } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import MovieDetailPage from "./Page/MovieDetailPage/MovieDetailPage";
import TVDetailPage from "./Page/TVDetailPage/TVDetailPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import FavoritePage from "./Page/FavoritePage/FavoritePage";
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movie/:id" component={MovieDetailPage} />
        <Route path="/tv/:id" component={TVDetailPage} />
        <Route path="/search/:keyword" component={SearchPage} />
        <Route path="/favorite" component={FavoritePage} />
      </Switch>
    </>
  );
};

export default App;
