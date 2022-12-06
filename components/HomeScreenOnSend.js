import { StyleSheet, SafeAreaView, View, Text, FlatList, Dimensions } from "react-native";
import { fonts } from "../themes/fonts";
import { constants } from "../themes/constants";
import { FontAwesome, FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';
import MoneySigns from "./MoneySigns";
import { colors } from "../themes/colors";
import PlainCircleIconOptionalTextBelow from "./PlainCircleIconOptionalTextBelow";
import PendingInvites from "../utils/PendingInvites";

const DIAMETER_FACTOR = 0.13;

export default function HomeScreenOnSend({currentSend, setCurrentSend}) {
    

    // const renderItem = ({item, index}) => {
    //     return(
    //         <View style={{marginRight: -Dimensions.get('window').width * .04}}>
    //             <PlainCircleIconOptionalTextBelow image={item.profilePic} widthFactor={DIAMETER_FACTOR} heightFactor={DIAMETER_FACTOR}/>
    //         </View>
    //     );
    // }
    
    return(
        <SafeAreaView style={styles.container}>
            <Text style={[fonts.title, styles.extraTitleStyling]}>Current Send</Text>
            <View style={styles.detailsContainer}>
                <View style={styles.headerRow}>
                    {/* <View style={{flex: 1}}>
                        <FlatList
                            horizontal
                            scrollEnabled={true}
                            showsHorizontalScrollIndicator
                            data={currentSend.participants}
                            renderItem={renderItem}
                            keyExtractor={(_, index) => index}
                            inverted={true}
                        />
                    </View> */}
                    <HardCodedPeople/>
                    
                    <View style={styles.dateTime}>
                        <Text style={styles.date}>
                            12/09/22
                        </Text>
                        <Text style={styles.time}>
                            6:00pm
                        </Text>
                    </View>
                </View>

                {/* TODO: Finish developing below */}
                <View style={styles.detailsRow}>
                    <FontAwesome5 name="calendar-alt" color={'black'} size={30}/>
                    <Text style={fonts.activityDetailsOnGreenDiv}>{currentSend.date}</Text>
                </View>
                <View style={styles.detailsRow}>
                    <AntDesign name="clockcircle" color={'black'} size={28}/>
                    <Text style={fonts.activityDetailsOnGreenDiv}>{currentSend.duration}</Text>
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
        </SafeAreaView>
    );
}

function HardCodedPeople() {
    return(
    <View style={{flexDirection: 'row', marginnLeft: -Dimensions.get('window').width * DIAMETER_FACTOR/2}}>
        {/* { currentSend.participants.forEach((element) => (
            <View key={element.name} style={{margninRight: -Dimensions.get('window').width * DIAMETER_FACTOR}}>
                <PlainCircleIconOptionalTextBelow image={element.profilePic} widthFactor={DIAMETER_FACTOR} heightFactor={DIAMETER_FACTOR}/>
            </View>
        ))} */}
        {/* {currentSend.participants.map((element) => {
            console.log(element.name);
            (<View key={element.name} style={{zIndex: 1, flex: 1, margninRight: -Dimensions.get('window').width * DIAMETER_FACTOR}}>
                <PlainCircleIconOptionalTextBelow image={element.profilePic} widthFactor={DIAMETER_FACTOR} heightFactor={DIAMETER_FACTOR}/>
            </View>)
        })} */}
        <PlainCircleIconOptionalTextBelow usePadding={false} additionalStyle={[styles.littleImage, {zIndex: 5}]} image={PendingInvites[0].participants[0].profilePic} widthFactor={DIAMETER_FACTOR} heightFactor={DIAMETER_FACTOR}/>
        <PlainCircleIconOptionalTextBelow usePadding={false} additionalStyle={[styles.littleImage, {zIndex: 4}]} image={PendingInvites[0].participants[1].profilePic} widthFactor={DIAMETER_FACTOR} heightFactor={DIAMETER_FACTOR}/>
        <PlainCircleIconOptionalTextBelow usePadding={false} additionalStyle={[styles.littleImage, {zIndex: 3}]} image={PendingInvites[0].participants[2].profilePic} widthFactor={DIAMETER_FACTOR} heightFactor={DIAMETER_FACTOR}/>
        <PlainCircleIconOptionalTextBelow usePadding={false} additionalStyle={[styles.littleImage, {zIndex: 2}]} image={PendingInvites[0].participants[3].profilePic} widthFactor={DIAMETER_FACTOR} heightFactor={DIAMETER_FACTOR}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    extraTitleStyling: {
        marginBottom: Dimensions.get('window').height * 0.025
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
        marginBottom: Dimensions.get('window').height * 0.03
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: Dimensions.get('window').height * 0.03
    },
    dateTime: {
        justifyContent: 'flex-end',
    },
    date: {
        fontSize: fonts.mediumFontSize,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    time: {
        fontSize: fonts.mediumFontSize,
        textAlign: 'right'
    },
    littleImage: {
        marginRight: -Dimensions.get('window').width * DIAMETER_FACTOR * 0.3,
        borderRadius: '100%',
        borderColor: colors.lightgray,
        borderWidth: 1,
    },
});