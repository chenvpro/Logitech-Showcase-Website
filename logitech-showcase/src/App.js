import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Product from './components/pages/Product';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/produits' element={<Product/>}/>
                <Route path='/contact' element={<Contact/>} />
            </Routes>
            <Footer/>
        </Router>
    </>
  )
}

export default App;
