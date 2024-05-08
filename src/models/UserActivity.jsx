import PropTypes from 'prop-types';

class UserActivityModel {

  /**
   * Format datas for the UserActivity Chart.
   * @param {Object} data - Data to format.
   * @returns {Array} - Formatted data.
   */
  
  formatData (data) {

    const activityData = data.data.sessions.map((session, index) => ({
      day: index + 1, 
      kilogram: session.kilogram,
      calories: session.calories
    }));
    return activityData;
        
  }
}

UserActivityModel.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          kilogram: PropTypes.number.isRequired,
          calories: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }),
};

export default UserActivityModel