import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';
import Home from './pages/Home/Home';
import CreateMovie from './pages/CreateMovie/CreateMovie';
import AdminLayout from "./components/Layout/AdminLayout";

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies/create" element={<CreateMovie />} />
      </Route>
    </Routes>
  )
}

export default App
