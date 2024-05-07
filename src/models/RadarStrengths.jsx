import PropTypes from 'prop-types';

const frenchTranslations = {
  'cardio': 'cardio',
  'energy': 'énergie',
  'endurance': 'endurance',
  'strength': 'force',
  'speed': 'vitesse',
  'intensity': 'intensité'
};

class RadarStrengths {

  /**
   * Format datas for the Radar Chart.
   * @param {*} data - Data to format.
   * @param {Object} data.data - Data object containing kind and value properties.
   * @param {Array} data.data.data - Array of data containing kind and value.
   * @param {string} data.data.data.kind - Data entry of the kind of strength.
   * @param {number} data.data.data.value - Value of the data entry.
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

    console.log(kindData);
    return kindData;
  }
}

RadarStrengths.propTypes = {
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

export default RadarStrengths