import useRadarStrenghts from '../hooks/useRadarStrenghts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function RadarStrenghts() {
  const { data, isLoading, error } = useRadarStrenghts()
  if (isLoading) {
    return <p>Loading...</p>
  }
  console.log(error)
  if (error) {
    return <p>Impossible de charger le composant</p>
  }

  return (
    <div className="radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data} >
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis dataKey='label' tick={{ fill: 'white' }} dy={5} />
          <Radar dataKey="value" stroke="transparent" fill="#FF0101" fillOpacity={0.6}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

  export default RadarStrenghts