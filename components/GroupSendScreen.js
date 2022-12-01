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
            <Text style={styles.title}> Step 1: Rally the Troops! </Text>
            <Text style={styles.subtitle}> These are your available friends </Text>
            <TouchableOpacity onPress={()=>searchName()}>
                {/* TODO make it so that when you click on search bar, Jamie's face is selected on Group Send screen */}
                <Image source={searchBar} style={styles.image} /> 
            </TouchableOpacity>
            <FlatList
                data={Friends}
                numColumns={3}
                renderItem={renderItem}
                keyExtractor={(_, index) => index}
            />
            {/* TODO: use a params prop to pass array of selected friends using boolean 'bitmap' to determine those */}
            <GreenButton navigation={navigation} title="Send with these friends" nextScreen="TimerScreen" deactivated={selectedFriendBools.indexOf(true) === -1}/>
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
        fontSize: fonts.titleFontSize,
        marginBottom: 10,
        fontWeight: 'bold',
        marginTop: Dimensions.get('window').height * 0.07,
    },
    subtitle: {
        fontSize: fonts.subtitleFontSize,
        marginBottom: 10
    },
    image: {
        marginBottom: 10
    }
  });