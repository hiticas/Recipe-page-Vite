import './Hero.scss'
import imageOmelette from '../../assets/image-omelette.jpeg'

function Hero() {
  return (
    <div className="hero">
      <img className="image-omelette" src={imageOmelette} alt="image" />
      <p className="text-large">Heros</p>
      <p className="text-small">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
    </div>
  )
}

export default Hero
