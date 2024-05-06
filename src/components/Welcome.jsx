import PropTypes from 'prop-types';

/**
 * React component welcoming the user.
 * @param {Object} props - Component's props.
 * @param {Object} props.data - User's data.
 * @param {Object} props.data.userInfos - User's infos.
 * @param {string} props.data.userInfos.firstName - User's first name.
 * @returns {JSX.Element} JSX element welcoming the user.
 */

function Welcome({ data }) {
  return (
    <div className="welcome">
      {data && data.userInfos && (
        <div>
          <h1>Bonjour <span className="firstname">{data.userInfos.firstName}</span></h1>
          <div className="congratulations">
            <p>Félicitations ! Vous avez explosé vos objectifs hier </p>
            <img src="../src/assets/clap.png" alt="clap" />
          </div>
        </div>
      )}
    </div>
  );
}

Welcome.propTypes = {
  data: PropTypes.shape({
    userInfos: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
    }),
  }),
};

export default Welcome;