import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Crypt from './pages/Crypt';
import SQLi from './pages/SQLi';

import Runaway from './pages/Runaway';
import Takeoff from './pages/Takeoff';
import Language from './pages/Language';
import Hidden from './pages/Hidden';

import Stega from './pages/Stega';
import OSINT from './pages/OSINT';
import Scrambled from './pages/Scrambled';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/osint" element={<OSINT/>} />
          <Route path="/runaway" element={<Runaway/>} />
          <Route path="/takeoff" element={<Takeoff/>} />
          
          <Route path="/cryptography" element={<Crypt/>} />
          <Route path="/scrambled" element={<Scrambled/>} />

          <Route path="/steganography" element={<Stega/>}/>
          <Route path="/language" element={<Language/>} />
          <Route path="/hidden" element={<Hidden/>} />

          <Route path="/sqli" element={<SQLi/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
