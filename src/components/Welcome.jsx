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

export default Welcome;