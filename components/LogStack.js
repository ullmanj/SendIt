import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import SendLogScreen from './SendLogScreen';
import SendInfoScreen from './SendInfoScreen';
import ChatScreen from './ChatScreen';  // not included because it exists elswhere - navigate to it leaving this stack.

export default function LogStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="SendLogScreen" component={SendLogScreen} />
            <Stack.Screen name="SendInfoScreen" component={SendInfoScreen} />
        </Stack.Navigator>
    );
}