import { useEffect, useState } from "react"
import radarStrengthsService from "../service/radarStrengthsService"
import RadarStrengthsModel from "../models/RadarStrengths"

function useRadarStrengths() {
  const [data, setData] = useState() 
  const [isLoading, setIsLoading] = useState() 
  const [error, setError] = useState() 

  useEffect(() => {
    getData()
  }, [])

  const getData =  async () => {
    try {
      setIsLoading(true)
      const radarStrengthsData = await radarStrengthsService()
      const model = new RadarStrengthsModel()
      const formattedData = model.formatData(radarStrengthsData)
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

export default useRadarStrengths