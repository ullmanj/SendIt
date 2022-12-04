import { StyleSheet, View, SafeAreaView, Text, Button, Dimensions, FlatList } from "react-native";
import { colors } from "../themes/colors";
import { constants } from "../themes/constants";
import { fonts } from "../themes/fonts";
import Friends from "../utils/Friends";
import CircleIcon from "./CircleIcon";
import PlainCircleIconOptionalTextBelow from "./PlainCircleIconOptionalTextBelow";
// import GreenButton from "./GreenButton";
import WideGreenButton from "./WideGreenButton";
import { useNavigation } from "@react-navigation/native";

export default function PendingInvite({ invite }){
    const navigation = useNavigation();

    const renderListItem = ({item}) => {
        return(
            <PlainCircleIconOptionalTextBelow image={item.profilePic} subtitle={item.name} widthFactor={0.11} heightFactor={0.11}/>
        );
    }

    return(
        <View style={styles.inviteContainer}>
            <View style={{width: '100%'}}>
                <Text style={styles.title}>
                    Send It! with
                </Text>
                <FlatList
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    data={ invite.participants }
                    renderItem={renderListItem}
                    keyExtractor={(item, index) => item.name}
                    initialNumToRender={6}
                />
            </View>
            <View style={styles.timeContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.time}>
                        {invite.minLeft}:{invite.secLeft}
                    </Text>
                    <Text style={styles.timeUnit}> mins</Text>
                </View>
                <Text style={styles.message}>
                    left to vote on this send
                </Text>
            </View>
            <WideGreenButton navigation={navigation} title={"Accept"} nextScreen={"MapScreen"} activeColor={'#fff'}
                paramsToPassOn={{'minutes': invite.minLeft, 'seconds': invite.secLeft, 'selectedFriendBools': {'selectedFriendBools': invite.selectedFriendBools}}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inviteContainer: {
      backgroundColor: colors.lightgreen,
      alignItems: 'center',
      justifyContent: 'center',
    //   height: Dimensions.get('window').height * 0.5,
      width: Dimensions.get('window').width * 0.7,
      borderRadius: constants.borderRadius,
      padding: Dimensions.get('window').width * 0.06,
    },
    title: {
        fontSize: fonts.subtitleFontSize,
        fontWeight: 'bold',
        marginBottom: Dimensions.get('window').height * 0.005,
    },
    time: {
        fontSize: fonts.subtitleFontSize,
        fontWeight: 'bold',
    },
    timeUnit: {
        fontSize: fonts.subtitleFontSize,
    },
    timeContainer: {
        marginVertical: Dimensions.get('window').height * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        fontSize: fonts.smallFontSize,
    }
  });