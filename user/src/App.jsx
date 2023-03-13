import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Movies from './pages/movies/Movies';
import MovieDetail from './pages/MovieDetail/MovieDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/movies/:slug" element={<MovieDetail />}></Route>
    </Routes>
  )
}

export default App
