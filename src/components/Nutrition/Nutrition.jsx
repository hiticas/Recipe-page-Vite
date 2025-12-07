import './Nutrition.scss'

function Nutrition() {
  return (
    <div className="nutrition">
      <p className="text-subtitle">Nutrition</p>
      <p className="text-body">The table below shows nutritional values per serving without the additional fillings.</p>
      <div className="content">
        <div className="row">
          <div className="left text-body">Calories</div>
          <div className="right text-body">277kcal</div>
        </div>
        <div className="row">
          <div className="left text-body">Carbs</div>
          <div className="right text-body">0g</div>
        </div>
        <div className="row">
          <div className="left text-body">Protein</div>
          <div className="right text-body">20g</div>
        </div>
        <div className="row">
          <div className="left text-body">Fat</div>
          <div className="right text-body">22g</div>
        </div>
      </div>
    </div>
  )
}

export default Nutrition