// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetItem} = props
  const {name, imageUrl, description} = planetItem

  return (
    <>
      <div className="item-container">
        <img src={imageUrl} alt={`planet ${name}`} className="image" />
        <h1 className="planet-name">{name}</h1>
        <p className="content">{description}</p>
      </div>
    </>
  )
}

export default PlanetItem
