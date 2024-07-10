import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import Header from './components/Header';
import Layout from './components/Layout.js'
import ProductDetailsPage from './components/ProductDetailsPage.js';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
