import PropTypes from 'prop-types';

class TodayScoreModel {

  /**
   * Format datas for the TodayScore Chart.
   * @param {*} data - Data to format.
   * @returns {Array} - Formatted data.
   */
  
  formatData (data) {
    let score;
    if (data.data.todayScore) {
      score = data.data.todayScore * 100;
    } else {
      score = data.data.score * 100;
    }
    const scoreData = [{ score, test:100 }];
    return scoreData;
  }
}

TodayScoreModel.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      todayScore: PropTypes.number,
      score: PropTypes.number,
    }).isRequired,
  }),
};

export default TodayScoreModel