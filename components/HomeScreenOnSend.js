import { StyleSheet, SafeAreaView, View, Text, FlatList, Dimensions, Image, ImageBackground } from "react-native";
import { fonts } from "../themes/fonts";
import { constants } from "../themes/constants";
import { FontAwesome, FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';
import MoneySigns from "./MoneySigns";
import { colors } from "../themes/colors";
import PlainCircleIconOptionalTextBelow from "./PlainCircleIconOptionalTextBelow";
import PendingInvites from "../utils/PendingInvites";
import { Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import WideGreenButton from "./WideGreenButton";
import { useNavigation } from "@react-navigation/native";

const DIAMETER_FACTOR = 0.13;

export default function HomeScreenOnSend({currentSend, setCurrentSend}) {
    const navigation = useNavigation();
    
    return(
        <SafeAreaView style={styles.container}>
            <Text style={[fonts.title, styles.extraTitleStyling]}>Current Send</Text>
            
            <SendSynopsis currentSend={currentSend} navigation={navigation}/>
            
            <View style={styles.buttonBlock}>
                <View style={styles.completeButton}>
                    <WideGreenButton navigation={navigation} title={"Complete"} shouldNavigate={false} activeColor={colors.lightpink}
                        additionalOnPress={() => setCurrentSend(null)}
                    />
                </View>
                <Text style={styles.completeText}>
                    Complete your current send
                </Text>
                <Text style={styles.completeText}>
                    to view invites!
                </Text>
            </View>
        </SafeAreaView>
    );
}

function SendSynopsis({currentSend, navigation}) {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `37.44908218204884, -122.15882561084781`;  // 549 University Ave
    const label = `${currentSend.name}`;
    const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
    });  // SOURCE: https://stackoverflow.com/questions/43214062/open-maps-google-maps-in-react-native

    return(
        <View style={styles.detailsContainer}>
            <View style={styles.headerRow}>
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
            <View style={styles.detailsRow}>
                <FontAwesome5 name="search-location" color={'black'} size={24}/>
                <Text style={[fonts.activityDetailsOnGreenDiv, {fontWeight: 'bold'}]}>{currentSend.name}</Text>
            </View>
            <TouchableOpacity style={styles.detailsRow} onPress={() => Linking.openURL(url)}>
                <FontAwesome5 name="location-arrow" size={24} color="black" />
                <Text style={[fonts.activityDetailsOnGreenDiv, styles.additionalLocationLinkStyling]}>549 University Ave</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={styles.detailsRow}>
                    <FontAwesome5 name="clock" size={24} color="black" />
                    <Text style={fonts.activityDetailsOnGreenDiv}>{currentSend.hours}</Text>
                </View>
                <View style={styles.detailsRow}>
                    <MoneySigns moneySigns={currentSend.price} fontSize={20} fontWeight={"default"}/>
                </View>
            </View>

            <View style={{marginTop: Dimensions.get('window').width * 0.06}}>
                <WideGreenButton navigation={navigation} title={"Chat"} nextScreen={"ChatScreen"} activeColor={'#fff'}
                paramsToPassOn={{activity: currentSend}}/>
            </View>
        </View>
    );
}

function HardCodedPeople() {
    return(
        <View style={{flexDirection: 'row', marginnLeft: -Dimensions.get('window').width * DIAMETER_FACTOR/2}}>
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
        marginBottom: Dimensions.get('window').height * 0.06
    },
    dateTime: {
        justifyContent: 'flex-end',
        backgroundColor: colors.lightgreen,
        paddingLeft: 5,
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
    additionalLocationLinkStyling: {
        textDecorationLine: 'underline',
    },
    completeButton: {
        width: Dimensions.get('window').width * 0.48, // same width factor as toggle.
        borderWidth: 1,
        borderColor: colors.darkpink,
        borderRadius: '100%',
        marginBottom: Dimensions.get('window').width * 0.05,
    },
    completeText: {
        width: Dimensions.get('window').width * 0.71, // same width factor as text and chat button in the send container.
        fontSize: fonts.smallFontSize,
        textAlign: 'center',
    },
    buttonBlock: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});