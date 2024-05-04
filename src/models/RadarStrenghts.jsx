import PropTypes from 'prop-types';

const frenchTranslations = {
  'cardio': 'cardio',
  'energy': 'énergie',
  'endurance': 'endurance',
  'strength': 'force',
  'speed': 'vitesse',
  'intensity': 'intensité'
};

class RadarStrenghts {
  /**
   * description fonction
   * @param {*} data // type param et après - description param, autant de fois qu'on a de paarm 
   * @returns // texte sur ce qu'elle retourne, sinon on suppr
   */
  formatData(data) {
    if (!data || !data.data) {
        return new Error('Invalid data format');
    }

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

RadarStrenghts.propTypes = {
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

export default RadarStrenghts