import PropTypes from 'prop-types';

class Sessions {

  formatData (data) {    
    if (!data || !data.data) {
      return new Error('Invalid data format');
    }
    const sessionsData = data.data.sessions.map(session => ({
        day: session.day,
        sessionLength: session.sessionLength
      }));
      console.log(sessionsData)
      return sessionsData
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