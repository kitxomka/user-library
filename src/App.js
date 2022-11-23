import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './components/NavBar';
import Main from './components/Main';
import AddUser from './components/AddUser';


const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new-user" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
