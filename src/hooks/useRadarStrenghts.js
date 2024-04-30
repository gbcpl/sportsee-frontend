import { useEffect, useState } from "react"
import radarStrenghtsService from "../service/radarStrenghtsService"
import RadarStrenghtsModel from "../models/RadarStrenghts"

function useRadarStrenghts() {
  const [data, setData] = useState() 
  const [isLoading, setIsLoading] = useState() 
  const [error, setError] = useState() 

  useEffect(() => {
    getData()
  }, [])

  const getData =  async () => {
    try {
      setIsLoading(true)
      const radarStrengthsData = await radarStrenghtsService()
      const model = new RadarStrenghtsModel()
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

export default useRadarStrenghts