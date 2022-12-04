import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";
import { fonts } from "../themes/fonts";
import PendingInvites from "../utils/PendingInvites";
import PendingInvite from "./PendingInvite";
import PendingInviteCarousel from "./PendingInviteCarousel";

export default function HomeScreen({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={fonts.title}>Pending Invites</Text>
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
      justifyContent: 'center',
    },
  });