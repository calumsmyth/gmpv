import { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import MyRoutes from './components/routing/MyRoutes';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <section className = "content text-green-900 mb-10 mt-10 ml-2 mr-2">    
        <MyRoutes />
      </section>
      <Footer />
    </Router>
  )
}

export default App
