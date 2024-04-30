class UserActivityModel {

  formatData (data) {
        const currentUrl = window.location.href;
        const matchUrl = currentUrl.match(/\/user\/(\d+)/);
        let userId = null;
        if (matchUrl) {
          userId = parseInt(matchUrl[1], 10);
        }
        const user = data.find(user => user.userId === userId);  
        if (user) {
          const activityData = user.sessions.map((session, index) => ({
            day: index + 1, 
            kilogram: session.kilogram,
            calories: session.calories
          }));
          return activityData;
        } else {
          return new Error('User not found')
        }
  }
}

export default UserActivityModel