async function userActivityService() {
  const currentUrl = window.location.href;
  const matchUrl = currentUrl.match(/\/user\/(\d+)/);
  let userId = null;
  if (matchUrl) {
    userId = parseInt(matchUrl[1], 10);
  }

  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`, {
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