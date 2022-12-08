// Navigation Imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// React Imports
import { StyleSheet, Text, View } from 'react-native';
// Font and Icon Imports
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// Local Imports
import HomeStack from './HomeStack';
import SendStack from './SendStack';
import LogStack from './LogStack';
import { colors } from '../themes/colors'
import Tabbar from "./Tabbar"

const Tab = createBottomTabNavigator();

export default function TabBarGroup({currentSend, setCurrentSend}) {
  return (
      // I know we're gonna update this tab later, but I adjusted the size to take up more of the screen to reflect the size of the tab in the figma
      <Tab.Navigator screenOptions={({ route }) => ({  // Adapted from cs47-lecture5b-demo
          // tabBarIcon: ({ focused, color, size }) => {
          //   // let iconName;
          //   let icon;

          //   if (route.name === 'HomeStack') {
          //     // iconName = 'home'
          //     icon = <Octicons name={'home'} size={40} color={color} />;
          //   } else if (route.name === 'SendStack') {
          //     // iconName = 'paper-airplane'
          //     icon = <FontAwesome name={'paper-plane'} size={38} color={color} />;
          //   } else if (route.name === 'LogStack') {
          //     // iconName = 'clock'
          //     icon = <FontAwesome5 name={'clock'} size={40} color={color} />;
          //   }
          //   // return <Octicons name={iconName} size={40} color={color} />;
          //   return icon;
          // },
          // tabBarActiveTintColor: colors.darkgreen,
          // tabBarInactiveTintColor: 'gray',
          headerShown: false,
          // tabBarStyle: {
          //   height: 100
          // },
          tabBarShowLabel: false
        })}
        tabBar={props => <View style={{backgroundColor: '#fff'}}><Tabbar {...props}/></View>}
        >

        <Tab.Screen name="HomeStack">
          {(props) => <HomeStack  {...props} currentSend={currentSend} setCurrentSend={setCurrentSend}/>}
        </Tab.Screen>
        <Tab.Screen name="SendStack">
          {(props) => <SendStack  {...props} currentSend={currentSend} setCurrentSend={setCurrentSend}/>}
        </Tab.Screen>
        <Tab.Screen name="LogStack">
          {(props) => <LogStack  {...props} currentSend={currentSend} setCurrentSend={setCurrentSend}/>}
        </Tab.Screen>
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
