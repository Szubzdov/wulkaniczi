import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './app/Home';
import Calendar from './app/Calendar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>

      <NavigationContainer >
        <Tab.Navigator
          // barStyle={{ backgroundColor: 'tomato' }},
          screenOptions={{
            tabBarLabelPosition: "below-icon",
            tabBarShowLabel: false,
            // headerTintColor: '#e91e63',
            headerShown: false,
          }}>

          <Tab.Screen name="Home" component={Home}
            options={{
              // tabBarLabel: 'Updates',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={30} />
              ),
            }}
          />

          <Tab.Screen name="Calendar" component={Calendar}
            options={{
              // tabBarLabel: 'Updates',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="calendar" color={color} size={30} />
              ),
            }} />

          <Tab.Screen name="Messages" component={Calendar}
            options={{
              // tabBarLabel: 'Updates',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="message" color={color} size={30} />
              ),
            }} />

          <Tab.Screen name="Settings" component={Calendar}
            options={{
              // tabBarLabel: 'Updates',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="face-man" color={color} size={30} />
              ),
            }} />
        </Tab.Navigator >

      </NavigationContainer >
    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
