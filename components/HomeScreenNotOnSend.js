import { StyleSheet, SafeAreaView, View, Text, Button, Dimensions } from "react-native";
import { fonts } from "../themes/fonts";
import { useState } from "react";
import PendingInvites from "../utils/PendingInvites";
import PendingInvite from "./PendingInvite";
import PendingInviteCarousel from "./PendingInviteCarousel";
import Toggle from "./Toggle";

export default function HomeScreenNotOnSend({navigation}) {
    const [isFree, setIsFree] = useState(true);

    return(
        <SafeAreaView style={styles.container}>
            <Text style={[fonts.title, styles.extraTitleStyling]}>Pending Invites</Text>
            <PendingInvite invite={PendingInvites[0]}/>
            {/* <PendingInviteCarousel/> */}
            <Text style={[fonts.title, styles.extraTitleStyling]}>Your Status</Text>
            <ToggleContainer isFree={isFree} setIsFree={setIsFree}/>
            
        </SafeAreaView>
    );
}

function ToggleContainer({ isFree, setIsFree }) {
    return (
        <View style={styles.toggleContainer}>
            <Toggle isFree={isFree} setIsFree={setIsFree} />
            <Text style={styles.toggleTitle}>
                {isFree ? "You're free!" : "You're busy..."}
            </Text>
            <Text style={styles.toggleSubtitle}>
                {isFree ?
                    "Friends can invite you to Send It!" :
                    "Friends will not be able to send you invites"
                }
            </Text>
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
    toggleContainer: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'green',
        // borderWidth: 10,
    },
    toggleTitle: {
        fontSize: fonts.mediumFontSize,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
    },
    toggleSubtitle: {
        fontSize: fonts.smallFontSize,
    },
  });