import logo from './logo.svg';
import './App.css';
import NavContainerComponent from './components/navBar/navContainerComponent';
import ProductContainerComponent from './components/product/productContainerComponent';

function App() {
  return (
    <div className="App">
      <NavContainerComponent />
      <ProductContainerComponent />
    </div>
  );
}

export default App;
