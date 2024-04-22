
function Welcome( {data, user} ) {

  return (
    <div className="welcome">
     {
      data && data.length > 0 && 
        <div>
          <h1>Bonjour, {user.userInfos.firstName}</h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier</p>
        </div>
     }
    </div>
  );

}

export default Welcome