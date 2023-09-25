import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'
import { colors } from './CurrentWeather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import moment from 'moment'

const City = ({ weather }) => {
  const insets = useSafeAreaInsets()
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right
        }
      ]}
    >
      <View style={styles.container}>
        <Text style={[styles.cityName, styles.cityText]}>{weather.name}</Text>
        <Text style={[styles.countryName, styles.cityText]}>
          {weather.country}
        </Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={colors.cinnabar}
            text={weather.population}
            iconSize={50}
            bodyTextStyles={[styles.population]}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={colors.cinnabar}
            text={moment.unix(weather.sunrise).format('hh:mm:ss a')}
            iconSize={50}
            bodyTextStyles={styles.riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={colors.cinnabar}
            text={moment.unix(weather.sunset).format('hh:mm:ss a')}
            iconSize={50}
            bodyTextStyles={styles.riseSetText}
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: colors.cinnabar,
    alignItems: 'center',
    padding: 20
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center'
  },
  content: {
    padding: 20,
    width: '100%',
    alignItems: 'center'
  },
  cityName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10
  },
  countryName: {
    fontSize: 30,
    color: colors.caputMortuum,
    textAlign: 'center',
    marginBottom: 20
  },
  cityTextWrapper: {
    backgroundColor: '#007aff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    marginBottom: 20
  },
  cityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.caputMortuum
  },
  populationWrapper: {
    backgroundColor: colors.tangerine,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  populationLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  population: {
    fontSize: 24,
    color: colors.caputMortuum,
    textAlign: 'center'
  },
  riseSetWrapper: {
    backgroundColor: colors.tangerine,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20
  },
  riseSetText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.caputMortuum,
    marginBottom: 10
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20
  }
})

export default City
