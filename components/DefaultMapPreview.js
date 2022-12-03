import { View, StyleSheet, Text, Dimensions } from "react-native";
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { constants } from "../themes/constants";

export default function DefaultMapPreview({ voteIsCast }) {

    const message = voteIsCast === true ? 
        "Great choice!" : 
        "Tap on an activity to view details and vote before the timer runs up!";

    const subMessage = "Waiting for others to vote or time to run out";

    return(
        <View style={styles.body}>
            <Text style={styles.text}>
                {message}
            </Text>
            { voteIsCast &&
                <Text style={styles.secondaryText}>
                    {subMessage}
                </Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        width: Dimensions.get('window').width * 0.85,
        height: undefined,
        backgroundColor: colors.white,
        borderRadius: constants.borderRadius,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
    },
    text: {
        fontSize: fonts.mediumFontSize,
        textAlign: 'center',
    },
    secondaryText: {
        fontSize: fonts.smallFontSize,
        textAlign: 'center',
    },
  });