import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container/Container';
import Budget from './components/pages/Budget';


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/company" element={<Company />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/budget" element={<Budget/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
