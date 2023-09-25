import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import Constants from 'expo-constants'
import { createStackNavigator } from '@react-navigation/stack'

import SignUpScreen from './src/screens/SignUpScreen'
import SignInScreen from './src/screens/SignInScreen'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { colors } from './src/screens/CurrentWeather'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import VerifyCodeScreen from './src/screens/VerifyCodeScreen'

const Stack = createStackNavigator()
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
export default function App() {
  return (
    <SafeAreaProvider>
      <ClerkProvider
        publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
      >
        <NavigationContainer>
          <SignedIn>
            <Tabs />
          </SignedIn>
          <SignedOut>
            <Stack.Navigator
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
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
              ></Stack.Screen>
              <Stack.Screen
                name="VerifyCode"
                component={VerifyCodeScreen}
              ></Stack.Screen>
            </Stack.Navigator>
          </SignedOut>
        </NavigationContainer>
      </ClerkProvider>
    </SafeAreaProvider>
  )
}
