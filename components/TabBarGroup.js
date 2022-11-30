// Navigation Imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// React Imports
import { StyleSheet, Text, View } from 'react-native';
// Font and Icon Imports
import { Octicons } from '@expo/vector-icons';
// Local Imports
import HomeStack from './HomeStack';
import SendStack from './SendStack';
import LogStack from './LogStack';

const Tab = createBottomTabNavigator();

export default function TabBarGroup() {
  return (
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
