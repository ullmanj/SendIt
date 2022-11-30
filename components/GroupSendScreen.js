import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Dimensions } from "react-native";
import CircleIconTextBelow from "./CircleIconTextBelow"
import Friends from '../utils/Friends'
import { fonts } from "../themes/fonts"
import GreenButton from "./GreenButton"
import React, { useState } from 'react';

export default function GroupSendScreen({navigation}) {
    const [searchBar, setSearchBar] = useState(require('../utils/miscPics/searchBar.png'))

    function searchName() {
        setSearchBar(require('../utils/miscPics/searchBarFilledIn.png'))
    }

    renderItem = ({ item }) => {
        return (
            <CircleIconTextBelow title={item.name} image={item.profilePic}/>
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Step 1: Rally the Troops! </Text>
            <Text style={styles.subtitle}> These are your availible friends </Text>
            <TouchableOpacity onPress={()=>searchName()}>
                {/* TODO make it so that when you click on search bar, Jamie's face is selected on Group Send screen */}
                <Image source={searchBar} style={styles.image} /> 
            </TouchableOpacity>
            <FlatList
                data={Friends}
                numColumns={3}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
            {/* TODO need error handling for when no friends were selected (or should gray out send with these friends button)  */}
            {/* TODO need to figure out how to send a list of selected friends to TimerScreen */}
            <GreenButton navigation={navigation} title="Send with these friends" nextScreen="TimerScreen" />
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