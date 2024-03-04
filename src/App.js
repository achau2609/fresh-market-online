//import './css/App.css';
import { Route, Routes, BrowserRouter as Router, Link, useLocation  } from 'react-router-dom';
import Home from "./pages";
import About from './pages/about';
import PublicView from './publicView/PublicView';

const NavigationLinks = () => {
  const location = useLocation();

  //Hide links on the public page
  if (location.pathname === '/public') {
    return null;
  }

  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><a href="/public" target="_blank" rel="noopener noreferrer">Public</a></li>
    </ul>
  );
};

function App() {
  return (
    <Router>
      <div>
        <NavigationLinks />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/public" element={<PublicView />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
function App() {
  return (
      <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="/public" target="_blank" rel="noopener noreferrer">Public</a></li>
            </ul>
          </div>
          <Routes>
              
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/public" element={<PublicView />} />
          </Routes>
      </Router>
  );
}

export default App;*/
