import { useEffect, useState } from "react"
import todayScoreService from "../service/todayScoreService"
import TodayScoreModel from "../models/TodayScore"

function useTodayScore() {
  const [data, setData] = useState() 
  const [isLoading, setIsLoading] = useState() 
  const [error, setError] = useState() 

  useEffect(() => {
    getData()
  }, [])

  const getData =  async () => {
    try {
      setIsLoading(true)
      const todayScoreData = await todayScoreService()
      const model = new TodayScoreModel()
      const formattedData = model.formatData(todayScoreData)
      if (!formattedData) {
        setError(new Error('User not found'))
      } else {
        setData(formattedData);

      }
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  } 
  return {
    data, isLoading, error
  }
}

export default useTodayScore