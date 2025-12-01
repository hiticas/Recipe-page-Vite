import './App.scss'
import Hero from './components/Hero/Hero'
import Preparation from './components/Preparation/Preparation'
import Ingredients from './components/Ingredients/Ingredients'
import Instructions from './components/Instructions/Instructions'
import Nutrition from './components/Nutrition/Nutrition'

function App() {
  return (
    <div className="app">
      <Hero />
      <Preparation />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </div>
  )
}

export default App
