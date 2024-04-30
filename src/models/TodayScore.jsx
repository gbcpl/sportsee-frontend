class TodayScoreModel {

  formatData (data) {
    const currentUrl = window.location.href;
    const matchUrl = currentUrl.match(/\/user\/(\d+)/);
    let userId = null;
    if (matchUrl) {
      userId = parseInt(matchUrl[1], 10);
    }
    const user = data.find(user => user.id === userId);
    if (user) {
      let score;
      if (user.todayScore) {
        score = user.todayScore * 100;
      } else {
        score = user.score * 100;
      }
      const scoreData = [{ score, test:100 }];
      console.log(scoreData)
      return scoreData;
    } else {
      return new Error('User not found')
    }
  }
}

export default TodayScoreModel