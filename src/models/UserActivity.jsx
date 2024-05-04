class UserActivityModel {

  formatData (data) {
    if (!data || !data.data) {
      return new Error('Invalid data format');
    }

      const activityData = data.data.sessions.map((session, index) => ({
        day: index + 1, 
        kilogram: session.kilogram,
        calories: session.calories
      }));
      return activityData;
        
  }
}

export default UserActivityModel