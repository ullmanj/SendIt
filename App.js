// Navigation Imports
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// React Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Font and Icon Imports
import { Octicons } from '@expo/vector-icons';
// Local Imports
import { HomeStack, SendStack, LogStack } from './components';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({  // Adapted from cs47-lecture5b-demo
          title: '',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = 'home'
            } else if (route.name === 'SendStack') {
              iconName = 'paper-airplane'
            } else if (route.name === 'LogStack') {
              iconName = 'clock'
            }
            // You can return any component that you like here!
            return <Octicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })} >

        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="SendStack" component={SendStack} />
        <Tab.Screen name="LogStack" component={LogStack} />
      </Tab.Navigator>
    </NavigationContainer>
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
