import { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import MyRoutes from './components/routing/MyRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <h1 className="bg-slate-500 text-white text-center text-4xl p-10">Gym Meal Prep</h1>
      <Navbar />
      <MyRoutes />
    </Router>
  )
}

export default App
