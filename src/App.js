import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Layout from './components/layout.js';
function App() {
  return (
    <Router>
      <div className="app">
            <Header />
        <Routes>
          <Route path='/' element={<Home />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
