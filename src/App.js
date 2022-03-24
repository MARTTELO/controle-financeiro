import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProjet from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container/Container';


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/company" element={<Company />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/newProject" element={<NewProjet/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
