import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class UserActivity extends PureComponent {

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
    fetch('../src/datas/user_activity.json', {
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
          // Flatten sessions array into a single array
          const flattenedData = user.sessions.map((session, index) => ({
            index: index + 1, // Index starts from 1
            kilogram: session.kilogram,
            calories: session.calories
          }));
          this.setState({ data: flattenedData });
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
      <BarChart
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis orientation='right'/>
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#8884d8"  />
        <Bar dataKey="calories" fill="#82ca9d"  />
      </BarChart>
    )
}
}

export default UserActivity