import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
// import PendingInvitesScreen from './PendingInvitesScreen';

export default function HomeStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            {/* this stack defaults to open the select interests screen for now (just so we can see what that screen looks like)
                in the future we'll probs want it to default to show the home screen */}
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}