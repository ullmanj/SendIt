import { StyleSheet, View, Text, Button, SafeAreaView, Alert} from "react-native";
import { fonts } from "../themes/fonts";
import { colors } from "../themes/colors";
import React, { useState } from 'react';
import MapActivities from '../utils/MapActivities'
import Friends from '../utils/Friends'
import MapIcon from './MapIcon'
// NOTE: just using a timer library for now because it's easier! if we have time at the end, we can go back and code our own
// Countdown credit to: https://www.npmjs.com/package/react-native-countdown-component
import CountDown from './CountDown.js'
// Map credit to: https://github.com/react-native-maps/react-native-maps 
import MapView, { Marker} from 'react-native-maps';
import MapActivityPreview from "./MapActivityPreview";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { constants } from "../themes/constants";
import ExitSendButtonNoAction from "./ExitSendButtonNoAction";
import DefaultMapPreview from "./DefaultMapPreview";
import FriendLocation from "./FriendLocation";
import ChatButtonNoAction from "./ChatButtonNoAction"

export default function MapScreen({ route, navigation, currentSend, setCurrentSend }) {
    const selectedFriendBools = route.params.selectedFriendBools;
    const backScreen = route.params.backScreen
    const backStack = route.params.backStack
    const [mapLoaded, setMapLoaded] = useState(false);
    const [selectedMarkerActivityIndex, setSelectedMarkerActivityIndex] = useState();
    const [voteIndex, setVoteIndex] = useState(-1);
    let timeLeft = parseInt(route.params.minutes) * 60 + parseInt(route.params.seconds);
    const yourLocation = [37.420112, -122.185346]
    const [numVotesReceived, setNumVotesReceived] = useState(() => {
        let count = 0
        Friends.map((friend, index) => {
            if (selectedFriendBools.selectedFriendBools[index]) {
                count++;
            }
        })
        return count
    })
    const [numTotalVotes, setNumTotalVotes] = useState(numVotesReceived + 1)
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

                onMarkerPress={(event) => {
                    const index = event.nativeEvent.id;
                    if (index < 100) {  // make sure user pressed an activity, not a (100's level) friend
                        setSelectedMarkerActivityIndex(index);
                    }
                }}
                onPress={() => setSelectedMarkerActivityIndex(undefined)}
            >
                {MapActivities.map((activity, index) => {
                    return (
                        <View key={index}>
                            <Marker
                                identifier={index}
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

                {/* adding your location to the map */}
                <View>
                    <Marker
                        coordinate={{latitude: yourLocation[0], longitude: yourLocation[1]}}
                    >
                        <FriendLocation name={"You"}/>
                    </Marker>
                </View>

                {Friends.map((friend, index) => {
                    if (!selectedFriendBools.selectedFriendBools[index]) {
                        return
                    }
                    return (
                        <View key={index + 100}>
                            <Marker
                                identifier={index + 100}
                                coordinate={{latitude: friend.latitude, longitude: friend.longitude}}
                            >
                                {/* These are the friends that appear on the map */}
                                <FriendLocation name={friend.name}/>
                            </Marker>
                        </View>
                    )}
                )}
            </MapView>

            <Pressable style={constants.backButtonStyle} onPress={() => {  // Back button renders regardless of map rendering status
                    Alert.alert(
                        'Back Out of Send',
                        'Are you sure you want to be removed from this Send?',
                        [
                          {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                          {text: 'Yes', onPress: () => {
                            /* don't need to do anything here with setCurrentSend*/
                            navigation.navigate('TabBarGroup');
                          }},// This seems to work. Just brings you to where you came from to get to the map. I think this is good as is.
                        ],
                        { cancelable: false }
                      )
                }}>
                    <ExitSendButtonNoAction />
            </Pressable>

            <Pressable style={constants.chatButtonStyle} onPress={() => {  // Back button renders regardless of map rendering status
                    if (voteIndex == -1) {
                        Alert.alert(
                            'Proceed Without Voting',
                            'Are you sure you want to proceed to the chat before voting on a send?',
                            [
                              {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                              {text: 'Yes', onPress: () => {
                                let activity = MapActivities[0] 
                                if (voteIndex != -1) {
                                    activity = MapActivities[voteIndex]
                                }
                                setCurrentSend(activity); // TODO see if u need this line
                                navigation.navigate('ChatScreen', { 
                                    'activity' : activity,
                                    'backScreen' : backScreen,
                                    'backStack' : backStack
                                })
                              }},
                            ],
                            { cancelable: false }
                          )
                    } else {
                        navigation.navigate('ChatScreen', { 
                            'activity' : MapActivities[voteIndex],
                            'backScreen' : backScreen,
                            'backStack' : backStack
                        })
                    }
                }}>
                    <ChatButtonNoAction />
            </Pressable>
            
            { mapLoaded === true &&  // pointerEvents box-none means that the touches are passed through the empty space to the map so you can still use the map with the overlay on top.
            <View style={styles.overlay} pointerEvents={'box-none'}>
                <View style={styles.headerBlurb}>
                    <CountDown
                        until={timeLeft} // this is how long (in seconds) the timer will be set for
                        // until={5} // uncomment this line (and comment the line before) if you want the timer to go quickly when you are testing/coding
                        size={30}
                        onFinish={() => {
                            let activity = MapActivities[0] 
                            if (voteIndex != -1) {
                                activity = MapActivities[voteIndex]
                            }
                            navigation.navigate('ChatScreen', { 
                                'activity' : activity,
                                'backScreen' : backScreen,
                                'backStack' : backStack
                            })
                        } }
                        digitStyle={{backgroundColor: undefined}}
                        showSeparator
                        separatorStyle={{color: colors.darkgray}}
                        timeToShow={['M', 'S']}
                        timeLabels={{m: '', s: ''}}
                    />
                    <Text style={{alignSelf: 'center', marginBottom: 20, fontSize: fonts.mediumFontSize}}>{numVotesReceived}/{numTotalVotes} votes received</Text>
                </View>
                
                { selectedMarkerActivityIndex === undefined &&
                    <DefaultMapPreview voteIsCast={voteIndex !== -1}/>
                }
                { selectedMarkerActivityIndex !== undefined &&
                    <MapActivityPreview activity={MapActivities[selectedMarkerActivityIndex]}
                        voteHandler={() => { setVoteIndex(selectedMarkerActivityIndex); setNumVotesReceived(numTotalVotes); }}
                        voteIsCast={voteIndex !== -1}
                        isVotedFor={selectedMarkerActivityIndex === voteIndex}/>
                }
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
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject, // TODO maybe need to change this to not absolutely fill but to fill everything below the text at top? idk how we wnat to format this
    },
    headerBlurb: {
        backgroundColor: '#ffffffcc',
        borderRadius: constants.borderRadius,
        paddingHorizontal: 10,
        // paddingBottom: 20,
    },
  });