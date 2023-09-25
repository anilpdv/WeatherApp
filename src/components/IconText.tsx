import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
  const { iconName, iconSize, iconColor, text, bodyTextStyles } = props
  return (
    <View style={styles.container}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textTheme: {
    fontWeight: 'bold',
    padding: 10
  }
})

export default IconText
