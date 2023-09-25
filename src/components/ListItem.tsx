import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { colors } from '../screens/CurrentWeather'
import moment from 'moment'

const getIcon = (condition) => {
  switch (condition) {
    case 'Rain':
      return 'cloud-rain'
    default:
      return 'sun'
  }
}

const ListItem = ({ dt_txt, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather
        name={getIcon(condition)}
        size={60}
        color={colors.cinnabar}
        style={styles.icon}
      />
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={styles.text}> {moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'baseline',
          width: '100%'
        }}
      >
        <Text style={styles.text}>H: {max}</Text>
        <Text style={styles.text}>L: {min}</Text>
      </View>
      <Text style={{ ...styles.text, ...styles.condition }}>{condition}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.caputMortuum,
    backgroundColor: colors.tangerine,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 200
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5
  },
  text: {
    fontSize: 18,
    color: colors.caputMortuum,
    textAlign: 'center',
    marginBottom: 5
  },
  icon: {
    fontSize: 40,
    paddingBottom: 20
  },
  condition: {
    fontWeight: 'bold'
  }
})

export default ListItem
