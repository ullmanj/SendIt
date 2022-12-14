import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import GroupSendScreen from './GroupSendScreen';
import TimerScreen from './TimerScreen';  // not included because it exists elswhere - navigate to it leaving this stack.
import MapScreen from './MapScreen';  // not included because it exists elswhere - navigate to it leaving this stack.
import ChatScreen from './ChatScreen';  // not included because it exists elswhere - navigate to it leaving this stack.

export default function SendStack({currentSend, setCurrentSend}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="GroupSendScreen">
                {(props) => <GroupSendScreen  {...props} currentSend={currentSend} setCurrentSend={setCurrentSend}/>}
            </Stack.Screen>
        </Stack.Navigator>
    );
}