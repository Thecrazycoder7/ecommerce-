import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import Header from './components/Header';
import Layout from './components/Layout.js'
import ProductDetailsPage from './components/ProductDetailsPage.js';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        {/* <Outlet /> */}
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
