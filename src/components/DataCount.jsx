import PropTypes from 'prop-types';
import useDataCount from '../hooks/useDataCount';

/**
 * React component displaying the count of calories, proteins, carbohydrates, and lipids.
 * @returns {JSX.Element} - JSX element displaying count of macronutrients.
 */

function DataCount( ) {
  const { data, isLoading, error } = useDataCount()
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Impossible de charger le composant.</p>
  }

  return (
    <div>
    {
      data &&  
      <div className="data-count">
        <div className="one-data">
          <img src="../src/assets/calories-icon.png" />
          <div className="type-count">
            <p className="number">{data.calorieCount}kCal</p>
            <p className="type">Calories</p>
          </div>
        </div>
        <div className="one-data">
          <img src="../src/assets/protein-icon.png" />
          <div className="type-count">
            <p className="number">{data.proteinCount}g</p>
            <p className="type">Protéines</p>
          </div>
        </div>
        <div className="one-data">
          <img src="../src/assets/carbs-icon.png" />
          <div className="type-count">
            <p className="number">{data.carbohydrateCount}g</p>
            <p className="type">Glucides</p>
          </div>
        </div>
        <div className="one-data">
          <img src="../src/assets/fat-icon.png" />
          <div className="type-count">
            <p className="number">{data.lipidCount}g</p>
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