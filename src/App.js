import './App.css';
import NavBar from './Navbar';
import "./styles.css"

import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import { Route, Routes } from 'react-router-dom';


function App() {
 
  return (
    <>
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
