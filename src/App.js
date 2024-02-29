import './css/App.css';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import Home from "./pages";
import About from './pages/about';

function App() {
  return (
      <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <Routes>
              
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
          </Routes>
      </Router>
  );
}

export default App;
