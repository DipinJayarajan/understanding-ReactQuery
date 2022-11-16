import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import RQSuperHeroespage from './components/RQSuperHeroespage';
import { RQSuperHeroPage } from './components/RQSuperHeropage';
import SuperHeroespage from './components/SuperHeroespage';

function App() {
  return (
    <div className="App">
      <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/superheroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rqsuperheroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/superheroes" element={<SuperHeroespage />} />
        <Route path="/rqsuperheroes" element={<RQSuperHeroespage />} />
        <Route path="/rqsuperheroes/:heroId" element={<RQSuperHeroPage />} />
     </Routes>
    </div>
  );
}

export default App;
