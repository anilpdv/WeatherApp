import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import CurrentWeather, { colors } from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import useWeatherData from '../hooks/useGetWeather'
import ErrorComponent from './ErrorItem'
import SafeMyProfileScreen from './MyProfileScreen'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  const { loading, errorMsg, weatherData: weather } = useWeatherData()
  if (errorMsg) {
    return <ErrorComponent />
  }

  if (loading) {
    return (
      <View style={styles.container}>
        {<ActivityIndicator size="large" color={colors.spaceCadet} />}
      </View>
    )
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.tangerine,
        tabBarInactiveTintColor: colors.cinnabar,
        headerStyle: {
          backgroundColor: colors.spaceCadet,
          elevation: 0
        },
        tabBarStyle: {
          backgroundColor: colors.spaceCadet,
          borderTopWidth: 0,
          elevation: 0
        },
        headerTitleStyle: {
          color: colors.tangerine
        }
      }}
    >
      <Tab.Screen
        name="Current"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? colors.tangerine : colors.cinnabar}
            />
          )
        }}
      >
        {() => (
          <CurrentWeather
            weather={weather && weather.list && weather.list[0]}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Upcoming"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? colors.tangerine : colors.cinnabar}
            />
          )
        }}
      >
        {() => <UpcomingWeather weather={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? colors.tangerine : colors.cinnabar}
            />
          )
        }}
      >
        {() => <City weather={weather.city} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={25}
              color={focused ? colors.tangerine : colors.cinnabar}
            />
          )
        }}
        component={SafeMyProfileScreen}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.cinnabar
  }
})
export default Tabs
