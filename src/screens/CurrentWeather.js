import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'

export default function CurrentWeather({ weather: weatherData }) {
  const { main: { temp, feels_like, temp_min, temp_max } = {}, weather = [] } =
    weatherData || {}

  const weatherCondition = weather[0]?.main
  const weatherDescription = weather[0]?.description
  return (
    <View
      style={[
        styles.wrapper,
        { backgroundColor: weatherType[weatherCondition] }
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          style={styles.icon}
          size={100}
          color={colors.tangerine}
        />
        <Text style={styles.temp}>{temp}</Text>
        <Text style={styles.feels}>Feels like {feels_like}</Text>

        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>HIGH {temp_max}</Text>
          <Text style={styles.highLow}>LOW {temp_min}</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>{weatherCondition}</Text>
        <Text style={styles.message}>{weatherDescription}</Text>
      </View>
    </View>
  )
}

export const colors = {
  gamboge: '#f0a202ff',
  tangerine: '#f18805ff',
  cinnabar: '#d95d39ff',
  spaceCadet: '#202c59ff',
  caputMortuum: '#581f18ff'
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.cinnabar
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temp: {
    color: colors.caputMortuum,
    fontSize: 48
  },
  feels: {
    color: colors.caputMortuum,
    fontSize: 26
  },
  highLow: {
    color: colors.caputMortuum,
    fontSize: 20,
    padding: 10
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    paddingBottom: 25
  },
  description: {
    color: colors.caputMortuum,
    fontSize: 48
  },
  message: {
    color: colors.caputMortuum,
    fontSize: 30
  },
  icon: {
    padding: 30
  }
})
