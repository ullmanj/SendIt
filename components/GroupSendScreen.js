import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Dimensions } from "react-native";
import CircleIconTextBelow from "./CircleIconTextBelow"
import Friends from '../utils/Friends'
import { fonts } from "../themes/fonts"
import GreenButton from "./GreenButton"
import React, { useState } from 'react';

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
            <View style={{alignSelf: 'flex-end', marginRight: Dimensions.get('window').width * 0.09, marginBottom: 0}}>
                <GreenButton navigation={navigation} title="Next" nextScreen="TimerScreen" deactivated={selectedFriendBools.indexOf(true) === -1} paramsToPassOn={{'selectedFriendBools': selectedFriendBools}}/>
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
    }
  });