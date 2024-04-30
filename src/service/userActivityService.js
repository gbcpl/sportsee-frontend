async function userActivityService() {
  try {
    const response = await fetch('../src/datas/user_activity.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  if (!response.ok) {
    throw new Error('Error fetching data')
  }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default userActivityService