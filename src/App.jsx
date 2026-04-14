import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p className= "bg-red-500 text-white p-4">Hello, World!</p>
     <Navbar />
    </div>
  )
}

export default App
