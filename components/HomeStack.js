import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';

export default function HomeStack({currentSend, setCurrentSend}) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="HomeScreen">
                {(props) => <HomeScreen  {...props} currentSend={currentSend} setCurrentSend={setCurrentSend}/>}
            </Stack.Screen>
        </Stack.Navigator>
    );
}