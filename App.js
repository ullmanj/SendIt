// Navigation Imports
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// React Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Font and Icon Imports
import { Octicons } from '@expo/vector-icons';
// Local Imports
import { TabBarGroup, TimerScreen, MapScreen, ChatScreen, UpdateInterestsScreen, IntroScreen } from './components';
import { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {
  const [currentSend, setCurrentSend] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>

            <Stack.Screen name="IntroScreen" component={IntroScreen}/>

            <Stack.Screen name="UpdateInterestsScreen" options={{gestureEnabled: false}} component={UpdateInterestsScreen} />
            
            <Stack.Screen name="TabBarGroup" /*options={{gestureEnabled: false}}*/ >
              {(props) => <TabBarGroup  {...props} currentSend={currentSend} setCurrentSend={setCurrentSend}/>}
            </Stack.Screen>
            {/* Below is the Process Funnel (no nav bar) */}
            <Stack.Screen name="TimerScreen" component={TimerScreen} options={{ presentation: 'modal' }}/>
            
            <Stack.Screen name="MapScreen">
              {(props) => <MapScreen  {...props} currentSend={currentSend} setCurrentSend={setCurrentSend}/>}
            </Stack.Screen>
            
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
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
