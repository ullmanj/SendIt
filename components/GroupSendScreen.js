import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Dimensions, Alert} from "react-native";
import CircleIconTextBelow from "./CircleIconTextBelow"
import Friends from '../utils/Friends'
import { fonts } from "../themes/fonts"
import GreenButton from "./GreenButton"
import React, { useState } from 'react';
import { colors } from "../themes/colors";

export default function GroupSendScreen({navigation}) {
    const [searchBar, setSearchBar] = useState(require('../utils/miscPics/searchBar.png'))
    const [selectedFriendBools, setSelectedFriendBools] = useState(Array(Friends.length).fill(false));

    function searchName() {
        setSearchBar(require('../utils/miscPics/searchBarFilledIn.png'))
    }

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
        <View style={styles.container}>
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
                scrollEnabled={false}
            />
            <View style={styles.bottomButtons}>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('UpdateInterestsScreen', {nextScreen: "SendStack"})}>
                    <Text style={styles.updateInterestText}>
                        Update
                    </Text>
                    <Text style={styles.updateInterestText}>
                        Interests
                    </Text>
                </TouchableOpacity>
                <GreenButton navigation={navigation} title="Next" nextScreen="TimerScreen"
                    deactivated={selectedFriendBools.indexOf(true) === -1} paramsToPassOn={{'selectedFriendBools': selectedFriendBools}}
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
                />
            </View>
            {/* TODO: use a params prop to pass array of selected friends using boolean 'bitmap' to determine those */}
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
    },
    updateInterestText: {
        fontSize: fonts.mediumFontSize,
        textDecorationLine: 'underline',
        color: colors.darkgreen
    },
  });