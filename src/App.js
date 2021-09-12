import './App.css'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { useReducer, lazy, Suspense } from 'react'
import Container from './Components/Container/Container'
import Navigation from './Components/Navigation/Navigation'

const HomePage = lazy(()=> import('./Components/HomePage/HomePage' /* webpackChunkName: "HomePage" */))
const MoviesPage = lazy(() => import('./Components/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */))
const MovieDetailsPage = lazy(() => import('./Components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */))
const Cast = lazy(() => import('./Components/Cast/Cast' /* webpackChunkName: "Cast" */))
const Reviews = lazy(()=> import('./Components/Reviews/Reviews' /* webpackChunkName: "Reviews" */))

const initialState = {
  popMovies: [],
  movieList: [],
  status: 'idle',
  movieDetails: null,
  cast: [],
  reviews: []
};

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
    default: console.log(`unexpected action type ${action.type}`)
  };
};

const App = () => {

  const [state, dispatch] = useReducer(setReduser, initialState)

  return (
    <BrowserRouter>
      <Container>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
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
          <Route path="/movies/:movieId/Reviews">
            <MovieDetailsPage state={state} dispatch={dispatch} />
            <Reviews state={state} dispatch={dispatch} />
          </Route>
          <Route>
            <HomePage popMovies={state.popMovies} dispatch={dispatch}/>
          </Route>
      </Switch>
      </Suspense>
    </Container>
    </BrowserRouter>
  );
};

export default App;