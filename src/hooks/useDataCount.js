import { useEffect, useState } from "react"
import mainUserDataService from "../service/mainUserDataService"
import DataCountModel from "../models/DataCount"

function useDataCount() {
  const [data, setData] = useState() 
  const [isLoading, setIsLoading] = useState() 
  const [error, setError] = useState() 

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      setIsLoading(true)
      const dataCount = await mainUserDataService()
      const model = new DataCountModel()
      const formattedData = model.formatData(dataCount)
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

export default useDataCount