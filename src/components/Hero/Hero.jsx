import './Hero.scss'
import imageOmelette from '../../assets/image-omelette.jpeg'

function Hero() {
  return (
    <div className="hero">
      <img className="image-omelette" src={imageOmelette} alt="image" />
      <div className="content">
        <p className="text-title">Simple Omelette Recipe</p>
        <p className="text-body">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      </div>
    </div>
  )
}

export default Hero
