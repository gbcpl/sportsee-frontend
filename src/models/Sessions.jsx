import { PureComponent } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


class Sessions extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('../src/datas/user_average_sessions.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Find user with ID 12 and extract their sessions
        const currentUrl = window.location.href;
        const match = currentUrl.match(/\/user\/(\d+)/);
        let userId = null;
        if (match) {
          userId = parseInt(match[1], 10);
        }
        const user = data.find(user => user.userId === userId);
        
        if (user) {
          // Format data correctly for RadarChart
          const formattedData = user.sessions.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength
          }));
          console.log(formattedData)
          this.setState({ data: formattedData });
        } else {
          console.error('User not found');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  render() {
    const { data } = this.state;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="day" />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default Sessions;