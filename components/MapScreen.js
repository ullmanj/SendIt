import { StyleSheet, View, Text, Button, SafeAreaView} from "react-native";
import { fonts } from "../themes/fonts";
import { colors } from "../themes/colors";
import React, { useState } from 'react';
import MapActivities from '../utils/MapActivities'
import MapIcon from './MapIcon'
// NOTE: just using a timer library for now because it's easier! if we have time at the end, we can go back and code our own
// Countdown credit to: https://www.npmjs.com/package/react-native-countdown-component
import CountDown from './CountDown.js'
// Map credit to: https://github.com/react-native-maps/react-native-maps 
import MapView, { Marker} from 'react-native-maps';

export default function MapScreen({route, navigation}) {
    const [mapLoaded, setMapLoaded] = useState(false)

    return(
        <SafeAreaView style={styles.mapContainer}>
            <MapView
                loadingEnabled={true}
                loadingIndicatorColor={'colors.darkgreen'}
                style={styles.map}
                initialRegion={{
                    latitude: 37.428230,
                    longitude: -122.168861,
                    latitudeDelta: 0.0422,
                    longitudeDelta: 0.0421,
                  }}
                onMapReady={() => { setMapLoaded(true) }}
            >
                {MapActivities.map((activity, index) => {
                    return (
                        <View key={index}>
                            <Marker
                                coordinate={{latitude: activity.latitude, longitude: activity.longitude}}
                            >
                                {/* These are the icons that appear on the map that people can vote on */}
                                <MapIcon 
                                    image={activity.image}
                                    name={activity.name}
                                    emoji={activity.emoji}/>
                            </Marker>
                        </View>
                    )
                })}
            </MapView>
            
            { mapLoaded === true &&
            <View style={styles.overlay}>
                <Text style={styles.title}> Step 3: Vote! </Text>
                <Text style={styles.subtitle}> You and all of the friends you selected have until the timer expires to select a send! </Text>
                <Text style={{backgroundColor: 'white'}}> Vote on a send by clicking on the one that appeals to you the most. </Text>
                <CountDown
                    until={route.params.minutes * 60} // this is how long (in seconds) the timer will be set for
                    // until={20} // uncomment this line (and comment the line before) if you want the timer to go quickly when you are testing/coding
                    size={30}
                    onFinish={() => alert('Finished')} // TODO we will need to update this to take the user to the next page depending on what was voted on the most
                    digitStyle={{backgroundColor: colors.lightpink}}
                    digitTxtStyle={{color: colors.darkpink}}
                    timeToShow={['M', 'S']}
                    timeLabels={{m: 'mins', s: 'secs'}}
                />
                <Button title="Back Out of Send" onPress={() => navigation.navigate('GroupSendScreen')}/>
            </View>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mapContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 0,
    },
    overlay: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
    },
    title: {
        fontSize: fonts.titleFontSize,
        backgroundColor: 'white'
    },
    subtitle: {
        fontSize: fonts.subtitleFontSize,
        backgroundColor: 'white'
    },
    map: {
        ...StyleSheet.absoluteFillObject, // TODO maybe need to change this to not absolutely fill but to fill everything below the text at top? idk how we wnat to format this
      },
  });