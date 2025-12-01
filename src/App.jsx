import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1 className="title">Vite Starter</h1>
    </div>
  )
}

export default App
