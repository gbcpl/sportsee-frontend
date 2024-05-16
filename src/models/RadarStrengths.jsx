import PropTypes from 'prop-types';

const frenchTranslations = {
  'cardio': 'cardio',
  'energy': 'énergie',
  'endurance': 'endurance',
  'strength': 'force',
  'speed': 'vitesse',
  'intensity': 'intensité'
};

class RadarStrengthsModel {

  /**
   * Format datas for the Radar Chart.
   * @param {Object} data - Data to format.
   * @returns {Array} - Formatted data.
   */

  formatData(data) {
    const kindOrder = ['intensity', 'speed', 'strength', 'endurance', 'energy', 'cardio'];

    const kindData = data.data.data.map(entry => ({
        kind: data.data.kind[entry.kind],
        value: entry.value,
        label: frenchTranslations[data.data.kind[entry.kind]]
    }));

    kindData.sort((a, b) => {
        return kindOrder.indexOf(a.kind) - kindOrder.indexOf(b.kind);
    });

    return kindData;
  }
}

RadarStrengthsModel.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          kind: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
        })
      ).isRequired,
      kind: PropTypes.object.isRequired,
    }).isRequired,
  }),
};

export default RadarStrengthsModel