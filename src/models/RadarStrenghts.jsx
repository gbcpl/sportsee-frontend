class RadarStrenghts {

  formatData (data) {
    const currentUrl = window.location.href;
    const matchUrl = currentUrl.match(/\/user\/(\d+)/);
    let userId = null;
    if (matchUrl) {
      userId = parseInt(matchUrl[1], 10);
    }
    const user = data.find(user => user.userId === userId);
    
    if (user) {
      const kindData = user.data.map(entry => ({
        kind: user.kind[entry.kind],
        value: entry.value
      }));
      console.log(kindData)
      return kindData
    } else {
      return new Error('User not found')
    }
  }
}

export default RadarStrenghts