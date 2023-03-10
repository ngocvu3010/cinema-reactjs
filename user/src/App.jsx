import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Movies from './pages/movies/Movies';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  useEffect(() => {
    const user_id = sessionStorage.getItem('user_id');    
      const url = process.env.REACT_APP_HOST + `/users?id=${user_id}`
      fetch(url)
      .then((res) => res.json())
      .then((user) => {
        if (user.length > 0) {
          setCurrentUser(user[0])
        }
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home currentUser={currentUser} />}></Route>
      <Route path="/login" element={<Login currentUser={currentUser} />}></Route>
      <Route path="/movies" element={<Movies currentUser={currentUser} />}></Route>
      <Route path="/movies/:slug" element={<MovieDetail currentUser={currentUser} />}></Route>
    </Routes>
  )
}

export default App
