import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ResidentialServices from './pages/ResidentialServices';
import Respite from './pages/Respite';
import PersonalCare from './pages/PersonalCare';
import Homemaker from './pages/Homemaker';
import Mentorship from './pages/Mentorship';
import Community from './pages/Community';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/residential" element={<ResidentialServices />} />
        <Route path="services/respite" element={<Respite />} />
        <Route path="services/personal-care" element={<PersonalCare />} />
        <Route path="services/homemaker" element={<Homemaker />} />
        <Route path="services/mentorship" element={<Mentorship />} />
        <Route path="community" element={<Community />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
