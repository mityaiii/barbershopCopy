import './App.css';
import MyNav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import PriceList from './pages/PriceList';
import { Router } from './components/router/Router';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <Router/>
      <Footer/>
    </div> 
  );
}

export default App;
