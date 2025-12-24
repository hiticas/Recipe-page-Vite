import './Instructions.scss'

function Instructions() {
  return (
    <div className="instructions">
      <p className="text-subtitle">Instructions</p>
      <div className="content">
        <div className="item text-body">
          <div className='number'>1.</div>
          <div><strong> Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
  You can add a tablespoon of water or milk for a fluffier texture.</div>
        </div>
        <div className="item text-body">
          <div className='number'>2.</div> 
          <div><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</div>
        </div>
        <div className="item text-body">
          <div className='number'>3.</div>
          <div><strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
  the eggs evenly coat the surface.</div>
        </div>
        <div className="item text-body">
          <div className='number'>4.</div> 
          <div><strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the 
  middle, sprinkle your chosen fillings over one half of the omelette.</div>
        </div>
        <div className="item text-body">
          <div className='number'>5.</div> 
          <div><strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the 
  fillings. Let it cook for another minute, then slide it onto a plate.</div>
        </div>
        <div className="item text-body">
          <div className='number'>6.</div> 
          <div><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</div>
        </div>
      </div>
      <div className='divider'></div>
    </div>
  )
}

export default Instructions
