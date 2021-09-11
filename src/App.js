import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Container from './Components/Container/Container';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/HomePage/HomePage'
import MoviesPage from './Components/MoviesPage/MoviesPage'
import fetchForMovie from './Components/Services/services';




const App = () => {

  return (
    <BrowserRouter>
      <Container>
      <Navigation />
      <Switch>
          <Route path="/" exact>
            <HomePage fetchForMovie={ fetchForMovie }/>
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MoviesPage />
          </Route>
          <Route>
            <HomePage />
          </Route>
      </Switch>
      
    </Container>
    </BrowserRouter>
    
    

  );

  
};

export default App;