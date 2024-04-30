
function Welcome( {data, user} ) {

  return (
    <div className="welcome">
     {
      data && data.length > 0 && 
        <div>
          <h1>Bonjour <span className="firstname">{user.userInfos.firstName}</span></h1>
          <div className="congratulations">
            <p>Félicitation ! Vous avez explosé vos objectifs hier </p>
            <img src="../src/assets/clap.png" alt="clap" />
          </div>
        </div>
     }
    </div>
  );

}

export default Welcome