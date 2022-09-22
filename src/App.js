import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <div>
        <BrowserRouter className='main-container'>
          <Sidebar />
          <div className='main-content'>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Services' element={<Services />} />
              <Route path='/Portfolio' element={<Portfolio />} />
              <Route path='/Blog' element={<Blog />} />
              <Route path='/Contact' element={<Contact />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
    
    </>
  );
}

export default App;
