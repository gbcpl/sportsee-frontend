import {useState, useEffect} from 'react';
import Header from './components/Header'
import NavLeft from './components/NavLeft'
import Welcome from './components/Welcome'
import DataCount from './components/DataCount';
import UserActivity from './models/UserActivity';
import RadarStrenghts from './models/RadarStrenghts';
import Sessions from './models/Sessions';

function App() {

  const [data,setData] = useState([]);
  const getData=()=>{
    fetch('../src/datas/main_user_data.json'
    ,{
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
  },[])

  const currentUrl = window.location.href;
  const match = currentUrl.match(/\/user\/(\d+)/);
  let userId = null;
  if (match) {
      userId = parseInt(match[1], 10);
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
                <div className="sessions">
                  <h2>Durée moyenne des sessions</h2>
                  <Sessions />
                </div>
                <div className="radar">
                  <RadarStrenghts />
                </div>
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
