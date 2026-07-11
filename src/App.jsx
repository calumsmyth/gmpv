import { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import MyRoutes from './components/routing/MyRoutes';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Navbar />
      <section className = "content mb-10 mt-10">    
        <MyRoutes />
      </section>
      <Footer />
    </Router>
  )
}

export default App
