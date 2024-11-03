import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

import Runaway from './pages/Runaway';
import Takeoff from './pages/Takeoff';
import Language from './pages/Language';
import Hidden from './pages/Hidden';
import Scrambled from './pages/Scrambled';
import Letmein from './pages/Letmein';

import Stega from './pages/Stega';
import OSINT from './pages/OSINT';
import Crypt from './pages/Crypt';
import Xss from './pages/Xss';

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

          <Route path="/xss" element={<Xss/>} />
          <Route path="/letmein" element={<Letmein/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
