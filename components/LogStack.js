import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import SendLogScreen from './SendLogScreen';
import SendInfoScreen from './SendInfoScreen';
import ChatScreen from './ChatScreen';  // this will be linked to from the SendInfoScreen
// Assume for the moment that we don't link to pending invites on the SendLogScreen.

export default function LogStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="SendLogScreen" component={SendLogScreen} />
            <Stack.Screen name="SendInfoScreen" component={SendInfoScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
    );
}