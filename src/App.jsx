import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hospital from './components/Home';
import Doctors from './components/Doctors';
// import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hospital />} />
        <Route path="/doctors" element={<Doctors />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
