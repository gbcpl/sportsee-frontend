class TodayScoreModel {

  formatData (data) {
    if (!data || !data.data) {
      return new Error('Invalid data format');
    }
      let score;
      if (data.data.todayScore) {
        score = data.data.todayScore * 100;
      } else {
        score = data.data.score * 100;
      }
      const scoreData = [{ score, test:100 }];
      console.log(scoreData)
      return scoreData;
    }
}

export default TodayScoreModel