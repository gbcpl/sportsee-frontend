class Sessions {

  formatData (data) {    
    if (!data || !data.data) {
      return new Error('Invalid data format');
    }
    const sessionsData = data.data.sessions.map(session => ({
        day: session.day,
        sessionLength: session.sessionLength
      }));
      console.log(sessionsData)
      return sessionsData
  }
}

export default Sessions