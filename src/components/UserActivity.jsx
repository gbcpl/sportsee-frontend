import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import useUserActivity from '../hooks/useUserActivity';


function UserActivity() {
  const { data, isLoading, error } = useUserActivity()
  if (isLoading) {
    return <p>Loading...</p>
  }
  console.log(error)
  if (error) {
    return <p>Impossible de charger le composant</p>
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload; 
      return (
        <div className="custom-tooltip-activity">
          <p>{data.kilogram}kg</p>
          <p>{data.calories}Kcal</p>
        </div>
      );
    }

    return null;
  }

 return (
  <div className="user-activity">
      <div className="title">
        <p className="title-activity">Activité quotidienne</p>
        <div className="legend">
          <img src="../src/assets/Oval.png" /><p>Poids (kg)</p>
          <img src="../src/assets/oval-red.png" /><p>Calories brûlées (kCal)</p>
        </div>
        </div>
      <BarChart
        width={835}
        height={300}
        data={data}
        barGap={8}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="day" />
        <YAxis orientation='right'/>
        <Tooltip 
          content={<CustomTooltip />}   
        />
        <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[20, 20, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[20, 20, 0, 0]} />
      </BarChart>
      </div>
 ) 
}

export default UserActivity