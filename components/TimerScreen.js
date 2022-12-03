import { StyleSheet, View, SafeAreaView, Text, Button, Image, TouchableOpacity, Dimensions } from "react-native";
import { fonts } from "../themes/fonts";
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../themes/colors";
import GreenButton from "./GreenButton"
import BackButton from "./BackButton"
import { constants } from "../themes/constants";

export default function TimerScreen({navigation, route}) {
    const MAX_TIME = 15;
    const MIN_TIME = 1;
    const [time, setTime] = useState(MIN_TIME);

    function incrementTime() {
        if (time < MAX_TIME) {
            setTime(time + 1)
        } // TODO add some sort of error message when they try to set a time greater than 15
    }

    function decrementTime() {
        if (time > MIN_TIME) {
            setTime(time - 1)
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={constants.backButtonStyle}>
                <BackButton navigation={navigation}/>
            </View>
            <View style={styles.headerInfo}>
                <Text style={fonts.title}>Set Timer</Text>
                <Text style={fonts.subtitle}>Your group will have this much time to vote on an activity</Text>
            </View>
            <View style={styles.timer}>
                <View style={styles.timerTextContainer}>
                    <Text style={styles.timerText}> {time} minutes </Text>
                </View>
                <View style={styles.incrementDecrementButtons}>
                    <TouchableOpacity onPress={incrementTime}>
                        <Icon name="caret-up" size={30} color={time == MAX_TIME ? colors.lightgray : undefined}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={decrementTime}>
                        <Icon name="caret-down" size={30} color={time == MIN_TIME ? colors.lightgray : undefined}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.nextButton}>
                <GreenButton navigation={navigation} title="Next" nextScreen="MapScreen" paramsToPassOn={{'minutes': time, 'selectedFriendBools': route.params}}/>
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
    headerInfo: {
        marginBottom: '10%',
    },
    timer: {
        flexDirection: 'row',
        marginVertical: 10,
        marginBottom: '20%',
    },
    timerTextContainer: {
        backgroundColor: colors.lightpink,
        marginRight: 10,
        borderRadius: constants.borderRadius,
        justifyContent: 'center',
        alignContent: 'center',
    },
    timerText: {
        fontSize: 30,
        padding: 10,
        textDecorationLine: 'underline',
    },
    incrementDecrementButtons: {
        justifyContent: 'center'
    },
    nextButton: {
        alignSelf: 'flex-end',
        marginRight: Dimensions.get('window').width * 0.09,
        marginBottom: 100,
    },
  });