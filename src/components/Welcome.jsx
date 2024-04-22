
function Welcome( {data, user} ) {

  return (
    <div className="welcome">
     {
      data && data.length > 0 && 
        <div>
          <h1>Bonjour <span className="firstname">{user.userInfos.firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
        </div>
     }
    </div>
  );

}

export default Welcome