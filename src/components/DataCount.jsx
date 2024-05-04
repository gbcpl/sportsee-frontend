import PropTypes from 'prop-types';

function DataCount( { data } ) {

  return (
    <div>
    {
      data &&  
      <div className="data-count">
        <div className="one-data">
          <img src="../src/assets/calories-icon.png" />
          <div className="type-count">
            <p className="number">{data.keyData.calorieCount}kCal</p>
            <p className="type">Calories</p>
          </div>
        </div>
        <div className="one-data">
          <img src="../src/assets/protein-icon.png" />
          <div className="type-count">
            <p className="number">{data.keyData.proteinCount}g</p>
            <p className="type">Protéines</p>
          </div>
        </div>
        <div className="one-data">
          <img src="../src/assets/carbs-icon.png" />
          <div className="type-count">
            <p className="number">{data.keyData.carbohydrateCount}g</p>
            <p className="type">Glucides</p>
          </div>
        </div>
        <div className="one-data">
          <img src="../src/assets/fat-icon.png" />
          <div className="type-count">
            <p className="number">{data.keyData.lipidCount}g</p>
            <p className="type">Lipides</p>
          </div>
        </div>
      </div>
    }
   </div>

  )
}

DataCount.propTypes = {
  data: PropTypes.shape({
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number.isRequired,
      proteinCount: PropTypes.number.isRequired,
      carbohydrateCount: PropTypes.number.isRequired,
      lipidCount: PropTypes.number.isRequired,
    }).isRequired,
  }),
};


export default DataCount