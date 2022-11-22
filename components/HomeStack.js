import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import PendingInvitesScreen from './PendingInvitesScreen';
// These two must be part of this stack as well, because they will be linked to from an invite, and we don't want to switch tabs to get here.
import MapScreen from './MapScreen';
import ChatScreen from './ChatScreen';

export default function HomeStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PendingInvitesScreen" component={PendingInvitesScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
    );
}