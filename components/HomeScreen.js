import { StyleSheet, SafeAreaView, View, Text, Button, Dimensions } from "react-native";
import { fonts } from "../themes/fonts";
import PendingInvites from "../utils/PendingInvites";
import PendingInvite from "./PendingInvite";
import PendingInviteCarousel from "./PendingInviteCarousel";

export default function HomeScreen({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={[fonts.title, styles.extraTitleStyling]}>Pending Invites</Text>
            <PendingInvite invite={PendingInvites[0]}/>
            {/* <PendingInviteCarousel/> */}
            <Text style={fonts.title}>Your Status</Text>
        </SafeAreaView>
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
    }
  });