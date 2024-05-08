import PropTypes from 'prop-types';
import useWelcome from '../hooks/useWelcome';

/**
 * React component welcoming the user.
 * @returns {JSX.Element} JSX element welcoming the user.
 */

function Welcome() {
  const { data, isLoading, error } = useWelcome()
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Impossible de charger le composant.</p>
  }

  return (
    <div className="welcome">
        <div>
          <h1>Bonjour <span className="firstname">{data}</span></h1>
          <div className="congratulations">
            <p>Félicitations ! Vous avez explosé vos objectifs hier </p>
            <img src="../src/assets/clap.png" alt="clap" />
          </div>
        </div>
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