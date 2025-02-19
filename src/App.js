import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
      <Home />
      <ContactUs />
      <AboutUs />
      <Product />
    </div>
  );
}

export default App;
