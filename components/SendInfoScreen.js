import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image, Dimensions, FlatList } from "react-native";
import { fonts } from "../themes/fonts"
import { constants } from "../themes/constants"
import BackButton from "./BackButton"
import GreenButton from "./GreenButton"
import MoneySigns from "./MoneySigns"
import PlainCircleIconOptionalTextBelow from "./PlainCircleIconOptionalTextBelow"
import { Octicons, Fontisto, AntDesign, FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons';
import { colors } from "../themes/colors";
import React, { useState } from 'react';
import ImageCarousel2 from "./ImageCarousel2"

export default function SendInfoScreen({ navigation, route }) {
    const activity = route.params.activity

    const renderItem = ({item, index}) => {
        return(
            <PlainCircleIconOptionalTextBelow image={item.profilePic} subtitle={item.name} widthFactor={0.21} heightFactor={0.21}/>
        );
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={constants.backButtonStyle}>
                <BackButton navigation={navigation} previousScreen="SendLogScreen"/>
            </View>
            <Text style={{...fonts.title, marginTop: Dimensions.get('screen').width * 0.18}}>{activity.name}</Text>
            <ScrollView 
                style={{width: Dimensions.get('screen').width}}>
            <Text style={fonts.labels}>Participants</Text>
            <View style={{marginLeft: Dimensions.get('window').width * 0.04, marginBottom: Dimensions.get('window').height * 0.04}}>
                <FlatList
                    data={activity.participants}
                    numColumns={3}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => index}
                    nestedScrollEnabled={true}
                />
            </View>
            <Text style={fonts.labels}>Photos</Text>
            <ImageCarousel2 data={activity.photos}/>
            <Text style={fonts.labels}>Details</Text>
            <View style={styles.detailsContainer}>
                <View style={styles.detailsRow}>
                    <FontAwesome5 name="calendar-alt" color={'black'} size={30}/>
                    <Text style={fonts.activityDetailsOnGreenDiv}>{activity.date}</Text>
                </View>
                <View style={styles.detailsRow}>
                    <AntDesign name="clockcircle" color={'black'} size={28}/>
                    <Text style={fonts.activityDetailsOnGreenDiv}>{activity.duration}</Text>
                </View>
                {/* had to add additional styling to these bottom 2 becuase their icons are differently sized than the two above */}
                <View style={styles.detailsRow}>
                    <View style={{marginLeft:-4}}>
                        <Entypo name="location-pin" color={'black'} size={32}/>
                    </View>
                    <Text style={fonts.activityDetailsOnGreenDiv}>549 University Ave</Text>
                </View>
                <View style={{...styles.detailsRow, marginBottom: 0}}>
                    <View style={{marginLeft:2}}>
                        <FontAwesome name="dollar" color={'black'} size={30}/>
                    </View>
                    <View style={{marginLeft: 17}}>
                        <MoneySigns moneySigns="$$" fontSize={20} fontWeight={"default"}/>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <GreenButton title="View Chat" navigation={navigation} nextScreen="ChatScreen" paramsToPassOn={{'activity': activity, 'backScreen': 'SendLogScreen', 'backStack': 'LogStack'}}/>
                <Octicons name="device-camera" color={colors.darkgreen} size={60} style={{marginLeft: 40}}/>
            </View>
            </ScrollView>
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
    detailsContainer: {
        backgroundColor: colors.lightgreen,
        width: Dimensions.get('window').width * 0.83,
        borderRadius: constants.borderRadius,
        padding: Dimensions.get('window').width * 0.06,
        alignSelf: 'center'
    },
    detailsRow: {
        flexDirection: 'row', 
        alignSelf: 'flex-start', 
        alignItems: 'center',
        marginBottom: Dimensions.get('window').height * 0.02
    }
  });