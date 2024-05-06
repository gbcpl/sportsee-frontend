import PropTypes from 'prop-types';

/**
 * React component displaying the count of calories, proteins, carbohydrates, and lipids.
 * @param {Object} props - Component's props.
 * @param {Object} props.data - User's data.
 * @param {Object} props.data.keyData - Object containing macronutrients counts.
 * @param {number} props.data.keyData.calorieCount - The count of calories.
 * @param {number} props.data.keyData.proteinCount - The count of proteins.
 * @param {number} props.data.keyData.carbohydrateCount - The count of carbohydrates.
 * @param {number} props.data.keyData.lipidCount - The count of lipids.
 * @returns {JSX.Element} - JSX element displaying count of macronutrients.
 */

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