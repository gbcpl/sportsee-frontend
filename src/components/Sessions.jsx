import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useSessions from '../hooks/useSessions';


function Sessions() {
  const { data, isLoading, error } = useSessions()
  if (isLoading) {
    return <p>Loading...</p>
  }
  console.log(error)
  if (error) {
    return <p>Impossible de charger le composant</p>
  }

  const formatDay = (day) => {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']; 
    return daysOfWeek[day - 1];
  }

  return (
    <div className="sessions">
      <div className="light-red"></div>
      <h2>Durée moyenne des sessions</h2>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 0,
          bottom: 16,
        }}
      >
        <rect x="0" y="0" width="190px" height="100%" fill="#FF0000" rx={5} ry={5} />
        <rect x="69%" y="0" width="79px" height="100%" fill="#E60000" rx={5} ry={5} />
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.49)" />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" tickFormatter={formatDay} axisLine={false} tickLine={false} tick={{ fill: 'white', opacity: 0.5  }} />
        <YAxis width={20} domain={[0, 'dataMax + 30']} axisLine={false} tick={false} />
        <Tooltip
          labelFormatter={(value) => {
            const session = data.find(session => session.day === value);
            return session ? `${session.sessionLength} min` : '';
          }}
          contentStyle={{ color: 'black' }}
        />
        <Line type="monotone" dataKey="sessionLength" stroke="url(#gradient)" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}

  export default Sessions