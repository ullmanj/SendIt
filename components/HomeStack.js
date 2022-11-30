import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
// import PendingInvitesScreen from './PendingInvitesScreen';
// These two must be part of this stack as well, because they will be linked to from an invite, and we don't want to switch tabs to get here.
import MapScreen from './MapScreen';
import ChatScreen from './ChatScreen';
import UpdateInterestsScreen from './UpdateInterestsScreen';

export default function HomeStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            {/* this stack defaults to open the select interests screen for now (just so we can see what that screen looks like)
                in the future we'll probs want it to default to show the home screen */}
            <Stack.Screen name="UpdateInterestsScreen" component={UpdateInterestsScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}