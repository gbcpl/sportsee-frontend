import { useEffect, useState } from "react"
import mainUserDataService from "../service/mainUserDataService"
import WelcomeModel from "../models/Welcome"

function useWelcome() {
  const [data, setData] = useState() 
  const [isLoading, setIsLoading] = useState() 
  const [error, setError] = useState() 

  useEffect(() => {
    getData()
  }, [])

  const getData =  async () => {
    try {
      setIsLoading(true)
      const welcome = await mainUserDataService()
      const model = new WelcomeModel()
      const formattedData = model.formatData(welcome)
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

export default useWelcome