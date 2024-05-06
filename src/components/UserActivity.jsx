import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import useUserActivity from '../hooks/useUserActivity';
import PropTypes from 'prop-types';

/**
 * React component displaying the user' daily activity.
 * @param {Object} data - User's data.
 * @returns {JSX.Element} - JSX element displaying a BarChart.
 */

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
        <div className="custom-tooltip-activity" >
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
          <img src="../src/assets/Oval.png" /><p className="units">Poids (kg)</p>
          <img src="../src/assets/oval-red.png" /><p className="units">Calories brûlées (kCal)</p>
        </div>
        </div>
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
      <BarChart
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
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" axisLine={false} tickMargin={15} />
        <YAxis yAxisId="kilogram" dataKey="kilogram" orientation="right" tickLine={false} domain={["dataMin - 2", "dataMax + 1"]} axisLine={false} />
        <YAxis yAxisId="calories" datayKey="calories" orientation="left" hide="true" />
        <Tooltip 
          content={<CustomTooltip />}   
        />
        <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={10} radius={[20, 20, 0, 0]} />
        <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={10} radius={[20, 20, 0, 0]} />
      </BarChart>
      </ResponsiveContainer>
      </div>
 ) 
}

UserActivity.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired
    })
  ),
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default UserActivity