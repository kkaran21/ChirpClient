import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';


function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/home" Component={HomePage} />
        </Routes>
    </Router>
    </>
  )
}

export default App
