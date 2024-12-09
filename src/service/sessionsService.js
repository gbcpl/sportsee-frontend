// import Sessions from '../datas/user_average_sessions.json'

async function sessionsService() {
  const currentUrl = window.location.href;
  const matchUrl = currentUrl.match(/\/user\/(\d+)/);
  let userId = null;
  if (matchUrl) {
    userId = parseInt(matchUrl[1], 10);
  }
  console.log(`Fetching data from URL: http://localhost:3000/api/user/${userId}/average-sessions`);
  try {
    // return Sessions[userId];
    const response = await fetch(`http://localhost:3000/api/user/${userId}/average-sessions`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  if (!response.ok) {
    throw new Error('Error fetching data')
  }
    const data = await response.json();
    console.log('Fetched data:', data);
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default sessionsService