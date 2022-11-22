import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import GroupSendScreen from './GroupSendScreen';
import MapScreen from './MapScreen';
import ChatScreen from './ChatScreen';
import UpdateInterestScreen from './UpdateInterestScreen';
/* LogStack is not included here intentionally.
 * When you exit the chat, the Tab navigator will be used to bring you to the send log flow (without the option to go back).*/

export default function SendStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="GroupSendScreen" component={GroupSendScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="UpdateInterestScreen" component={UpdateInterestScreen} />
        </Stack.Navigator>
    );
}