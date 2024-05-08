import PropTypes from 'prop-types';

class WelcomeModel {

  /**
   * Format datas for the Welcome component.
   * @param {Object} data - Data to format.
   * @returns {string} - Formatted data.
   */
  
  formatData (data) {
    const welcomeData = data.data.userInfos.firstName;
    return welcomeData;
  }
}

WelcomeModel.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      userInfos: PropTypes.shape({
        firstName: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default WelcomeModel