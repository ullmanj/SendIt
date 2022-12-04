import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image, FlatList, Dimensions, Alert} from "react-native";
import CircleIconTextBelow from "./CircleIconTextBelow"
import PreviousSends from '../utils/PreviousSends'
import { fonts } from "../themes/fonts"
import React, { useState } from 'react';

export default function SendLogScreen({navigation}) {
    renderItem = ({ item, index }) => {
        return (
            <CircleIconTextBelow title={item.name} image={item.image} showBorderColor={false} pressHandler={() => { 
                navigation.navigate('LogStack', {
                    screen: 'SendInfoScreen',
                    params: { activity: item },
                })}}
            />
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={fonts.title}>Your Memories</Text>
            {/* TODO try to make image carousel ?? !! ?? 🥴 */}
            <View style={{marginBottom: Dimensions.get('window').height * 0.035, alignItems: 'center'}}>
                {/* TODO made width and height not hard coded */}
                <Image source={require("../utils/previousSendPics/camping1.jpeg")} style={{width: 200, height: 200}}/> 
                <Text style={{fontSize: fonts.mediumFontSize}}>Hiking</Text>
            </View>
            <Text style={fonts.labels}>Search</Text>
            <Image style={styles.searchBar} source={require('../utils/miscPics/searchBar.png')}/>
            <FlatList
                data={PreviousSends}
                numColumns={3}
                renderItem={renderItem}
                keyExtractor={(_, index) => index}
            />
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
        marginBottom: Dimensions.get('window').height * 0.025,
    },
  });