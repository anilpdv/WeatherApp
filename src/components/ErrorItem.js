import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const ErrorComponent = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="frowno" size={64} color="#fff" />
      <Text style={styles.text}>Something went wrong</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  }
})

export default ErrorComponent
