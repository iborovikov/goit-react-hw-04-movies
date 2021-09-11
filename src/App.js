import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useReducer } from 'react';
import Container from './Components/Container/Container';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/HomePage/HomePage'
import MoviesPage from './Components/MoviesPage/MoviesPage'
import MovieDetailsPage from './Components/MovieDetailsPage/MovieDetailsPage'
import Cast from './Components/Cast/Cast'
import Reviews from './Components/Reviews/Reviews'


const initialState = {
  popMovies: [],
  movieList: [],
  status: 'idle',
  movieDetails: null,
  cast: [],
  reviews: null
}

function setReduser(state, action) {
  switch (action.type) {
    case 'setStatus':
      return { ...state, status: action.payload };
    case 'setPopMovies':
      return { ...state, popMovies: action.payload };
    case 'setMovieList':
      return { ...state, movieList: action.payload };
    case 'setMovieDetails':
      return { ...state, movieDetails: action.payload };
    case 'setCast':
      return { ...state, cast: action.payload };
    case 'setReviews':
      return { ...state, reviews: action.payload };
    case 'resetDetailsData':
      return {...state, movieDetails: null, cast: [], reviews: []}
    default: console.log(`unexpected action type ${action.type}`)
  };
    
}

const App = () => {

  const [state, dispatch] = useReducer(setReduser, initialState)


  return (
    <BrowserRouter>
      <Container>
      <Navigation />
      <Switch>
          <Route path="/" exact>
            <HomePage popMovies={state.popMovies} dispatch={dispatch}/>
          </Route>
          <Route path="/movies" exact>
            <MoviesPage state={state} dispatch={dispatch} />
          </Route>
          <Route path="/movies/:movieId" exact>
            <MovieDetailsPage state={state} dispatch={dispatch} />
          </Route>
          <Route path="/movies/:movieId/Cast" exact>
            <MovieDetailsPage state={state} dispatch={dispatch} />
            <Cast state={state} dispatch={dispatch} />
          </Route>
          <Route path="/movies/:movieId/Reviews" >
            <MovieDetailsPage state={state} dispatch={dispatch} />
            <Reviews state={state} dispatch={dispatch} />
          </Route>
          <Route>
            <p>Page not found</p>
          </Route>
      </Switch>
      
    </Container>
    </BrowserRouter>
    
    

  );

  
};

export default App;