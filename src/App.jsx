import Header from './components/Header'
import NavLeft from './components/NavLeft'
import Welcome from './components/Welcome'
import DataCount from './components/DataCount';
import UserActivity from './components/UserActivity';
import RadarStrengths from './components/RadarStrengths';
import Sessions from './components/Sessions';
import TodayScore from './components/TodayScore';

function App() {

  return (
    <div>
      <Header />
      <div className="mainContainer">
        <NavLeft />
        <div className="graphs">
          <Welcome />
          <div className="activity">
            <div className="charts">
              <UserActivity />
              <div className="radar-score">
                <Sessions />
                <RadarStrengths />
                <TodayScore />
              </div>
            </div>
            <DataCount />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
