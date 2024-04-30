import {useState, useEffect} from 'react';
import Header from './components/Header'
import NavLeft from './components/NavLeft'
import Welcome from './components/Welcome'
import DataCount from './components/DataCount';
import UserActivity from './components/UserActivity';
import RadarStrenghts from './components/RadarStrenghts';
import Sessions from './components/Sessions';
import TodayScore from './components/TodayScore';

function App() {

  const [data, setData] = useState([]);

  const getData = () => {
    fetch('../src/datas/main_user_data.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(main) {
        console.log(main);
        setData(main)
      });
  }

  useEffect(()=>{
    getData()
  }, [])

  const currentUrl = window.location.href;
  const matchUrl = currentUrl.match(/\/user\/(\d+)/);
  let userId = null;
  if (matchUrl) {
      userId = parseInt(matchUrl[1], 10);
  }
  const user = data.find(user => user.id === userId);  

  return (
    <div>
      <Header />
      <div className="mainContainer">
        <NavLeft />
        <div className="graphs">
          <Welcome data={data} user={user} />
          <div className="activity">
            <div className="charts">
              <UserActivity />
              <div className="radar-score">
                <Sessions />
                <RadarStrenghts />
                <TodayScore />
              </div>
            </div>
            <DataCount data={data} user={user} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
