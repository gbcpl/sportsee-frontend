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

  const frenchTranslations = {
    1: 'cardio',
    2: 'énergie',
    3: 'endurance',
    4: 'force',
    5: 'vitesse',
    6: 'intensité'
  };

  const tickFormatter = (value) => {
    return frenchTranslations[value + 1];
  }
  return (
    <div className="radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
          <PolarGrid />
          <PolarAngleAxis tickFormatter={tickFormatter} tick={{ fill: 'white' }}/>
          <Radar dataKey="value" stroke="#8884d8" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

  export default RadarStrenghts