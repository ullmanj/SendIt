import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Dimensions, Alert, SafeAreaView} from "react-native";
import CircleIconTextBelow from "./CircleIconTextBelow"
import Friends from '../utils/Friends'
import { fonts } from "../themes/fonts"
import GreenButton from "./GreenButton"
import React, { useState } from 'react';
import { colors } from "../themes/colors";

export default function GroupSendScreen({navigation, currentSend, setCurrentSend}) {
    const [selectedFriendBools, setSelectedFriendBools] = useState(Array(Friends.length).fill(false));

    renderItem = ({ item, index }) => {
        if (index > 8) {
            return
        }
        return (
            <CircleIconTextBelow title={item.name} image={item.profilePic} pressHandler={() => {
                let newSelectedFriendBools = selectedFriendBools;
                newSelectedFriendBools[index] = !newSelectedFriendBools[index];  // toggle
                setSelectedFriendBools([...newSelectedFriendBools]);  // explicitly make new array to trigger re-render on change
            }}/>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={fonts.title}>Rally the Troops!</Text>
            <Text style={fonts.subtitle}>Invite your available friends</Text>
            <Text style={fonts.labels}>Search friends</Text>
            <Image style={styles.searchBar} source={require('../utils/miscPics/searchBar.png')}/>
            <Text style={fonts.labels}>Recents</Text>
            <FlatList
                data={Friends}
                numColumns={3}
                renderItem={renderItem}
                keyExtractor={(_, index) => index}
            />
            <View style={styles.bottomButtons}>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('UpdateInterestsScreen', {backStack: 'SendStack', backScreen: 'GroupSendScreen'})}>
                    <Text style={styles.updateInterestText}>
                        Update
                    </Text>
                    <Text style={styles.updateInterestText}>
                        Interests
                    </Text>
                </TouchableOpacity>
                <GreenButton navigation={navigation} title="Next" /*nextScreen="TimerScreen"*/
                    deactivated={selectedFriendBools.indexOf(true) === -1} /*paramsToPassOn={{'selectedFriendBools': selectedFriendBools}}*/
                    deactivatedPressHandler={() => {
                        Alert.alert(
                            'Select at least one friend to create a Send',
                            '',
                            [
                              {text: 'OK', onPress: () => {}, style: 'cancel'},
                            ],
                            { cancelable: false }
                          )
                    }}
                    explicitNavigationFunction={() => {
                        if(currentSend !== null) {
                            Alert.alert(
                                'You are on an Active Send!',
                                'Complete your current send to continue planning a new one',
                                [
                                {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                                {text: 'Complete', onPress: () => {
                                    setCurrentSend(null);
                                    navigation.navigate('TimerScreen', {'selectedFriendBools': selectedFriendBools});
                                }},
                                ],
                                { cancelable: false }
                            )
                        } else {
                            navigation.navigate('TimerScreen', {'selectedFriendBools': selectedFriendBools});
                        }
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBar: {
        marginBottom: Dimensions.get('window').height * 0.035,
    },
    bottomButtons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Dimensions.get('window').width * 0.09,
        //marginRight: Dimensions.get('window').width * 0.09,
        //marginBottom: 0,
        paddingBottom: 5,
    },
    updateInterestText: {
        fontSize: fonts.mediumFontSize,
        textDecorationLine: 'underline',
        color: colors.darkgreen
    },
  });