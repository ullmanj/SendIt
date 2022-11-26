import { StyleSheet, View, Text, Button } from "react-native";
import { fonts } from "../themes/fonts";
import { colors } from "../themes/colors";
// NOTE: just using a timer library for now because it's easier! if we have time at the end, we can go back and code our own
// Countdown  credit to: https://www.npmjs.com/package/react-native-countdown-component
import CountDown from 'react-native-countdown-component';  

export default function MapScreen({route, navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Step 3: Vote! </Text>
            <Text style={styles.subtitle}> You and all of the friends you selected have until the timer expires to select a send! </Text>
            <Text> Select a send by clicking on the one that appeals to you the most. </Text>
            <CountDown
                until={route.params.minutes * 60} // this is how long (in seconds) the timer will be set for
                // until={30} // uncomment this line (and comment the line before) if you want the timer to go quickly when you are testing/coding
                size={30}
                onFinish={() => alert('Finished')} // TODO we will need to update this to take the user to the next page depending on what was voted on the most
                digitStyle={{backgroundColor: colors.lightpink}}
                digitTxtStyle={{color: colors.darkpink}}
                timeToShow={['M', 'S']}
                timeLabels={{m: 'mins', s: 'secs'}}
            />
            {/* TODO look into https://github.com/react-native-maps/react-native-maps for info on how to do the map/make a map with custom icons */}
            {/* still not sure how we're gonna do the voting though 😵‍💫 */}
            <Button title="Cancel Send" onPress={() => navigation.navigate('GroupSendScreen')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: fonts.titleFontSize
    },
    subtitle: {
        fontSize: fonts.subtitleFontSize
    }
  });