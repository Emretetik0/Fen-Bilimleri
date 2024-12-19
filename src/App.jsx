import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './view/Home';
// import About from './view/About'; // Örnek başka bir sayfa
// import NotFound from './view/NotFound'; // Örnek 404 sayfası

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
{/*      
        <Route path="/about" element={<About />} />  
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
