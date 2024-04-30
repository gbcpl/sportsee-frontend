class Sessions {

  formatData (data) {
    const currentUrl = window.location.href;
    const matchUrl = currentUrl.match(/\/user\/(\d+)/);
    let userId = null;
    if (matchUrl) {
      userId = parseInt(matchUrl[1], 10);
    }
    const user = data.find(user => user.userId === userId);
    
    if (user) {
      const sessionsData = user.sessions.map(session => ({
        day: session.day,
        sessionLength: session.sessionLength
      }));
      console.log(sessionsData)
      return sessionsData
    } else {
      return new Error('User not found')
    }
  }
}

export default Sessions