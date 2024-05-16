import PropTypes from 'prop-types';

class SessionsModel {

  /**
   * Format datas for the Session Chart.
   * @param {*} data - Data to format.
   * @returns {Array} - Formatted data.
   */
  
  formatData (data) {    
    const sessionsData = data.data.sessions.map(session => ({
        day: session.day,
        sessionLength: session.sessionLength
      }));
    return sessionsData;
  }
}

SessionsModel.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.string.isRequired,
          sessionLength: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }),
};

export default SessionsModel