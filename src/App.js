import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home/Home';
import Company from './components/pages/Company/Company';
import Contact from './components/pages/Contact/Contact';
import Container from './components/layout/Container/Container';
import Budget from './components/pages/Budgets/Budget';
import NewBudget from './components/pages/NewBudget';


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/company" element={<Company />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/budgets" element={<Budget/>} />
          <Route path="/newBudget" element={<NewBudget/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
