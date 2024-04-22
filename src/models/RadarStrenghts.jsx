import { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


class RadarStrenghts extends PureComponent {

  
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
    fetch('../src/datas/user_performance.json', {
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
          const formattedData = user.data.map(entry => ({
            kind: user.kind[entry.kind],
            value: entry.value
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
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <Radar dataKey="value" stroke="#8884d8" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}


export default RadarStrenghts