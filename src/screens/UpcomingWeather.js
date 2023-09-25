import React from 'react'
import { View, StyleSheet, FlatList, Text, StatusBar } from 'react-native'
import ListItem from '../components/ListItem'
import { colors } from './CurrentWeather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// generate dummydy data from openweathermap.org it should look like this: dt_tx main: {} weather []
const data = [
  {
    dt: 1630117200,
    main: {
      dt_txt: '2021-08-28 12:00:00',
      temp: 297.07,
      feels_like: 297.07,
      temp_min: 297.07,
      temp_max: 297.07
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d'
      }
    ]
  },
  {
    dt: 1630128000,
    main: {
      dt_txt: '2021-08-28 12:00:00',
      temp: 297.07,
      feels_like: 297.07,
      temp_min: 297.07,
      temp_max: 297.07
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d'
      }
    ]
  },
  {
    dt: 1630138800,
    main: {
      dt_txt: '2021-08-28 12:00:00',
      temp: 297.07,
      feels_like: 297.07,
      temp_min: 297.07,
      temp_max: 297.07
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d'
      }
    ]
  }
]

const UpcomingWeather = ({ weather }) => {
  const insets = useSafeAreaInsets()
  const renderItem = ({ item }) => {
    return (
      <ListItem
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        condition={item.weather[0].main}
      />
    )
  }

  return (
    <View style={[styles.container, {}]}>
      {/* <Text style={styles.title}>UpcomingWeather</Text> */}
      <FlatList
        data={weather}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt.toString()}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    backgroundColor: colors.cinnabar,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.caputMortuum,
    textAlign: 'center',
    marginVertical: 20
  }
})

export default UpcomingWeather
