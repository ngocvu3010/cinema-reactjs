import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  )
}

export default App
