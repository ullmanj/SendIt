import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Dimensions, Alert} from "react-native";
import CircleIconTextBelow from "./CircleIconTextBelow"
import Friends from '../utils/Friends'
import { fonts } from "../themes/fonts"
import GreenButton from "./GreenButton"
import React, { useState } from 'react';
import { colors } from "../themes/colors";


export default function SendLogScreen() {
    return(
        <View style={styles.container}>
            <Text style={fonts.title}>Your memories</Text>
            {/* TODO update image with actual width/height */}
            {/* TODO try to make image carousel ?? !! ?? 🥴 */}
            <Image source={require("../utils/previousSendPics/camping1.jpeg")} style={{width: 200, height: 200}}/> 
            <Text style={fonts.labels}>Search</Text>
            <Image style={styles.searchBar} source={require('../utils/miscPics/searchBar.png')}/>
            {/* <FlatList
                data={Friends}
                numColumns={3}
                renderItem={renderItem}
                keyExtractor={(_, index) => index}
            /> */}
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
  });