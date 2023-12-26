import './App.css';
import Navbar from './components/Navbar';
import AddProduct from './pages/AddProduct';
import Add from './pages/AddProduct';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';


function App() {
  
  return (
    <div className=''>
      <Navbar />
      {/* <Home /> */}
      <ProductPage />
      {/* <AddProduct /> */}
    </div>
  );
}

export default App;
