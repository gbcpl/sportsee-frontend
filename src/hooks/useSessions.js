import { useEffect, useState } from "react"
import sessionsService from "../service/sessionsService"
import SessionsModel from "../models/Sessions"

function useSessions() {
  const [data, setData] = useState() 
  const [isLoading, setIsLoading] = useState() 
  const [error, setError] = useState() 

  useEffect(() => {
    getData()
  }, [])

  const getData =  async () => {
    try {
      setIsLoading(true)
      const sessionsData = await sessionsService()
      const model = new SessionsModel()
      const formattedData = model.formatData(sessionsData)
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

export default useSessions