function DataCount( {data, user} ) {

  return (
    <div>
    {
      data && data.length > 0 && 
      <div className="data-count">
        <div className="one-data">
          <img src="../src/assets/calories-icon.png" />
          <div className="type-count">
            <p className="number">{user.keyData.calorieCount}kCal</p>
            <p className="type">Calories</p>
          </div>
        </div>
        <div className="one-data">
          <img src="../src/assets/protein-icon.png" />
          <div className="type-count">
            <p className="number">{user.keyData.proteinCount}g</p>
            <p className="type">Protéines</p>
          </div>
        </div>
        <div className="one-data">
          <img src="../src/assets/carbs-icon.png" />
          <div className="type-count">
            <p className="number">{user.keyData.carbohydrateCount}g</p>
            <p className="type">Glucides</p>
          </div>
        </div>
        <div className="one-data">
          <img src="../src/assets/fat-icon.png" />
          <div className="type-count">
            <p className="number">{user.keyData.lipidCount}g</p>
            <p className="type">Lipides</p>
          </div>
        </div>
      </div>
    }
   </div>

  )
}

export default DataCount