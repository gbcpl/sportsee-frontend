import { useEffect, useState } from "react"
import userActivityService from "../service/userActivityService"
import UserActivityModel from "../models/UserActivity"

function useUserActivity() {
  const [data, setData] = useState() 
  const [isLoading, setIsLoading] = useState() 
  const [error, setError] = useState() 

  useEffect(() => {
    getData()
  }, [])

  const getData =  async () => {
    try {
      setIsLoading(true)
      const userActivityData = await userActivityService()
      const model = new UserActivityModel()
      const formattedData = model.formatData(userActivityData)
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

export default useUserActivity