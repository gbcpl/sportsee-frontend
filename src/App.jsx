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
  const [userData, setUserData] = useState(null); 

  useEffect(() => {
    const currentUrl = window.location.href;
    const matchUrl = currentUrl.match(/\/user\/(\d+)/);
    let userId = null;
    if (matchUrl) {
      userId = parseInt(matchUrl[1], 10);
    }

    fetch(`http://localhost:3000/user/${userId}/`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUserData(data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div>
      <Header />
      <div className="mainContainer">
        <NavLeft />
        <div className="graphs">
          <Welcome data={userData} />
          <div className="activity">
            <div className="charts">
              <UserActivity />
              <div className="radar-score">
                <Sessions />
                <RadarStrenghts />
                <TodayScore />
              </div>
            </div>
            <DataCount data={userData} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
