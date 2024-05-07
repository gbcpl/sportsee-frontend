import PropTypes from 'prop-types';

class Sessions {

  /**
   * Format datas for the Session Chart.
   * @param {*} data - Data to format.
   * @param {Object} data.data - Data object containing sessions.
   * @param {Array} data.data.sessions - Array of sessions.
   * @param {string} data.data.sessions.day - Day of the session.
   * @param {number} data.data.sessions.sessionLength - Length of the session.
   * @returns {Array} - Formatted data.
   */
  
  formatData (data) {    
    const sessionsData = data.data.sessions.map(session => ({
        day: session.day,
        sessionLength: session.sessionLength
      }));
    console.log(sessionsData);
    return sessionsData;
  }
}

Sessions.propTypes = {
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

export default Sessions