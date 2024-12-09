import PropTypes from 'prop-types';

class DataCountModel {

  /**
   * Format datas for the DataCount component.
   * @param {Object} data - Data to format.
   * @returns {Object} - Formatted data.
   */
  
  formatData (data) {
    const dataCount = {
      calorieCount: data.keyData.calorieCount,
      proteinCount: data.keyData.proteinCount,
      carbohydrateCount: data.keyData.carbohydrateCount,
      lipidCount: data.keyData.lipidCount
    };
    return dataCount;  
  }
}

DataCountModel.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      keyData: PropTypes.shape({
        calorieCount: PropTypes.number.isRequired,
        proteinCount: PropTypes.number.isRequired,
        carbohydrateCount: PropTypes.number.isRequired,
        lipidCount: PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default DataCountModel