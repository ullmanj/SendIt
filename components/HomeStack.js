import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';  // not included because it exists elswhere - navigate to it leaving this stack.
import ChatScreen from './ChatScreen';  // not included because it exists elswhere - navigate to it leaving this stack.
import SelectInterestsScreen from './SelectInterestsScreen';

export default function HomeStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            {/* this stack defaults to open the select interests screen for now (just so we can see what that screen looks like)
                in the future we'll probs want it to default to show the home screen */}
            <Stack.Screen name="SelectInterestsScreen" component={SelectInterestsScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}