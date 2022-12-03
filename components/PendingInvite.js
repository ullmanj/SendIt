import { StyleSheet, View, SafeAreaView, Text, Button, Dimensions } from "react-native";
import { colors } from "../themes/colors";
import { constants } from "../themes/constants";
import { fonts } from "../themes/fonts";

export default function PendingInvite({ invite }){
    return(
        <View style={styles.inviteContainer}>

        </View>
    );
}

const styles = StyleSheet.create({
    inviteContainer: {
      backgroundColor: colors.lightgreen,
      alignItems: 'center',
      justifyContent: 'center',
      height: Dimensions.get('window').height * 0.5,
      width: Dimensions.get('window').width * 0.7,
      borderRadius: constants.borderRadius,
    },
  });