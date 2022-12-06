import { StyleSheet, SafeAreaView, View, Text, Button, Dimensions } from "react-native";
import { fonts } from "../themes/fonts";
import { useState } from "react";
import PendingInvites from "../utils/PendingInvites";
import Toggle from "./Toggle";
import PendingInviteCarousel from "./PendingInviteCarousel";

export default function HomeScreenNotOnSend() {
    const [isFree, setIsFree] = useState(true);  // toggle

    return(
        <SafeAreaView style={styles.container}>
            <Text style={[fonts.title, styles.extraTitleStyling]}>Pending Invites</Text>
            <PendingInviteCarousel pendingInvites={true} data={PendingInvites}/>
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
        alignItems: 'center',
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