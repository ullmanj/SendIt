// Navigation Imports
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// React Imports
import { StyleSheet, Text, View } from 'react-native';
// Local Imports
import HomeStack from './HomeStack';
import SendStack from './SendStack';
import LogStack from './LogStack';
import Tabbar from "./Tabbar";

const Tab = createBottomTabNavigator();

export default function TabBarGroup({currentSend, setCurrentSend}) {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false
        })}
        tabBar={props => <View style={{backgroundColor: '#fff', paddingTop: 0 /*change to add more whitespace above tab bar*/}}><Tabbar {...props}/></View>}
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
