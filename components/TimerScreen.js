import { StyleSheet, View, Text, Button, Image, TouchableOpacity, Dimensions } from "react-native";
import { fonts } from "../themes/fonts";
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../themes/colors";
import GreenButton from "./GreenButton"
import BackButton from "./BackButton"

export default function TimerScreen({navigation}) {
    const [time, setTime] = useState(3);

    function incrementTime() {
        if (time < 15) {
            setTime(time + 1)
        } // TODO add some sort of error message when they try to set a time greater than 15
    }

    function decrementTime() {
        if (time > 3) {
            setTime(time - 1)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.backButton}>
                <BackButton navigation={navigation}/>
            </View>
            <Text style={fonts.title}>Set timer</Text>
            <Text style={fonts.subtitle}>Your group will have this much time to vote on an activity</Text>
            <View style={styles.timer}>
                <Text style={styles.timerText}> {time} minutes </Text>
                <View style={styles.incrementDecrementButtons}>
                    <TouchableOpacity onPress={incrementTime}>
                        <Icon name="caret-up" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={decrementTime}>
                        <Icon name="caret-down" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{alignSelf: 'flex-end', marginRight: Dimensions.get('window').width * 0.09, marginBottom: 0}}>
                <GreenButton navigation={navigation} title="Next" nextScreen="MapScreen" paramsToPassOn={{'minutes': time}}/>
            </View>    
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
    backButton: {
        alignSelf: 'flex-start',
        paddingLeft: 40,
        marginTop: -300 // something got weird with the formatting so i had to add this
    },
    timer: {
        flexDirection: 'row'
    },
    timerText: {
        fontSize: 30,
        backgroundColor: colors.lightpink,
        padding: 10,
    },
    incrementDecrementButtons: {
        justifyContent: 'center'
    },
  });