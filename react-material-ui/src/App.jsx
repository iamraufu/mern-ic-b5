import { Routes, Route } from "react-router";
import Home from './pages/Homepage/Home'
import Services from './pages/Services/Services'
import Teams from './pages/Teams/Teams'
import Leagues from './pages/Leagues/Leagues'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leagues" element={<Home />} />
      <Route path="/leagues/:name" element={<Leagues />} />
      <Route path="/leagues/:name/:team" element={<Teams/>} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
