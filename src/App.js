import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Layout from './components/Layout.js'

function App() {
  return (
      <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Layout />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
