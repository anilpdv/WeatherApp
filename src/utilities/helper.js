import { Alert } from 'react-native'

export const kelvinToCelsius = (kelvin) => {
  return kelvin - 273.15
}

export const unixToDateTime = (unix) => {
  const date = new Date(unix * 1000)
  return date.toLocaleString()
}

export const transformWeatherData = (data) => {
  const transformedData = {
    location: data.name,
    description: data.weather[0].description,
    temperature: kelvinToCelsius(data.main.temp),
    feelsLike: kelvinToCelsius(data.main.feels_like),
    tempMin: kelvinToCelsius(data.main.temp_min),
    tempMax: kelvinToCelsius(data.main.temp_max),
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    windDirection: data.wind.deg,
    clouds: data.clouds.all,
    visibility: data.visibility,
    sunrise: unixToDateTime(data.sys.sunrise),
    sunset: unixToDateTime(data.sys.sunset)
  }
  return transformedData
}

export const createTwoButtonAlert = (
  title = 'Alert Title',
  message = 'My Alert Msg',
  cancelText = 'Cancel',
  okText = 'OK'
) =>
  Alert.alert(title, message, [
    {
      text: cancelText,
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel'
    },
    { text: okText, onPress: () => console.log('OK Pressed') }
  ])
