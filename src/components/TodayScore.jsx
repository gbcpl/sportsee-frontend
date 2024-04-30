import useTodayScore from '../hooks/useTodayScore';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';


function TodayScore() {
  const { data, isLoading, error } = useTodayScore()
  if (isLoading) {
    return <p>Loading...</p>
  }
  console.log(error)
  if (error) {
    return <p>Impossible de charger le composant</p>
  }
  return (
    <div className="score">
      <h2>Score</h2>
      <p><span>{data && data[0] && data[0].score}%</span><br /> de votre objectif</p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="60%" barSize={10} data={data} startAngle={90} endAngle={450}>
          <RadialBar 
            minAngle={15}
            background
            clockWise
            dataKey="test"
            fill="#FFFFFF"  
          />
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="score"
            fill="#FF0000"
            cornerRadius={20}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

  export default TodayScore