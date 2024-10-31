import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Crypt from './pages/Crypt';
import Runaway from './pages/Runaway';
import Takeoff from './pages/Takeoff';
import SQLi from './pages/SQLi';
import Stega from './pages/Stega';

import OSINT from './pages/OSINT';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/osint" element={<OSINT/>} />
          <Route path="/runaway" element={<Runaway/>} />
          <Route path="/takeoff" element={<Takeoff/>} />
          {/* <Route path="/foreign" element={<Foreign/>} /> */}
          
          <Route path="/cryptography" element={<Crypt/>} />
          <Route path="/sqli" element={<SQLi/>} />
          <Route path="/steganography" element={<Stega/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
