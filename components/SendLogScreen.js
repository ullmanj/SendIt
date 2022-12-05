import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image, FlatList, Dimensions, Alert} from "react-native";
import CircleIconTextBelow from "./CircleIconTextBelow"
import PreviousSends from '../utils/PreviousSends'
import { fonts } from "../themes/fonts"
import React, { useState } from 'react';
import ImageCarousel from "./ImageCarousel"

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
            <ImageCarousel data={PreviousSends}/>
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