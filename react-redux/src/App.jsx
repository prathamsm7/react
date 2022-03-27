import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductsList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<ProductsList />} />
          <Route exact path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
