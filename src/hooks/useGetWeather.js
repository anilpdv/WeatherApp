import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY, BASE_URL } from '@env'

const useWeatherData = () => {
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  const fetchLocation = async () => {
    setLoading(true)
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        throw new Error('Permission to access location was denied')
      }

      const location = await Location.getCurrentPositionAsync({})
      return location
    } catch (error) {
      console.error(error)
      throw new Error('Error getting location')
    } finally {
      setLoading(false)
    }
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      setErrorMsg(null)

      const location = await fetchLocation()
      if (!location) {
        setErrorMsg('Location not found')
        throw new Error('Location not found')
      }

      const response = await fetch(
        `${BASE_URL}/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&appid=${WEATHER_API_KEY}`
      )
      if (!response.ok) {
        setErrorMsg('Failed to fetch weather data')
        throw new Error('Failed to fetch weather data')
      }
      const data = await response.json()
      setWeatherData(data)
    } catch (err) {
      console.error(err)
      setErrorMsg(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, errorMsg, weatherData }
}

export default useWeatherData
