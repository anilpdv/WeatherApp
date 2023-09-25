import { ActivityIndicator, View } from 'react-native'
import { ClerkProvider } from '@clerk/clerk-expo'
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { colors } from './src/screens/CurrentWeather'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import { styles } from './App'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      setLoading(false)
    })()
  }, [])
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.spaceCadet} />
      </View>
    )
  }
  return (
    <SafeAreaProvider>
      <ClerkProvider
        publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
      >
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </ClerkProvider>
    </SafeAreaProvider>
  )
}
