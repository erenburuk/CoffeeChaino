import './App.css';
import Navbar from './components/Navbar';
import AddProduct from './pages/AddProduct';
import Add from './pages/AddProduct';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stocks' element={<ProductPage />} />
        </Routes>
        {/*  <Navbar /> */}
        {/* <ProductPage /> */}
        {/* <AddProduct /> */}
      </div>
    </>
  );
}

export default App;
