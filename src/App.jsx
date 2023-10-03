import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

import AppRouter from './Components/UI/AppRouter/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;