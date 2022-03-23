import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
    <Router>
      <Routes>
              <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
    );
}

export default App;
