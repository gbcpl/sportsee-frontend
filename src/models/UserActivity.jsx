import PropTypes from 'prop-types';

class UserActivityModel {

  /**
   * Format datas for the UserActivity Chart.
   * @param {*} data - Data to format.
   * @param {Object} data.data - Data object containing array of sessions.
   * @param {Array} data.data.sessions - Array of sessions.
   * @param {number} data.data.sessions.kilogram - Kilogram value.
   * @param {number} data.data.sessions.calories - Calories burned.
   * @param {Date} data.data.sessions.day - Day of the week.
   * @returns {Array} - Formatted data.
   */
  
  formatData (data) {
    if (!data || !data.data) {
      return new Error('Invalid data format');
    }

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