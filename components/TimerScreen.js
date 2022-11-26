import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { fonts } from "../themes/fonts";
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from "../themes/colors";


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
            <Text style={styles.title}> Step 2: Set a timer </Text>
            <Text style={styles.subtitle}> Your friends will have this length of time to vote on a send! You can set a timer for anywhere from 3 to 15 minutes. </Text>
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
            <View style={{flexDirection: 'row'}}>
                <Button title="Cancel Send" onPress={() => navigation.navigate('GroupSendScreen')}/>
                <Button title="Let's vote!" onPress={() => navigation.navigate('MapScreen', {
                    minutes: time
                })}/>
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
    title: {
        fontSize: fonts.titleFontSize
    },
    subtitle: {
        fontSize: fonts.subtitleFontSize
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