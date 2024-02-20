import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './home/Home';
import { About } from './About/About';
import { Contact } from './contact/Contact';
import { Courses } from './Courses/Courses';
import { Fee } from './Fee/Fee';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Addmissionform } from './admissionform/Addmissionform';
       

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/fee' element={<Fee />} /> 
          <Route path='/contact' element={<Contact />} /> 
          <Route path='/admissionform' element={<Addmissionform/>} /> 
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
