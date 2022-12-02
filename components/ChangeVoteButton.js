// To be used for green buttons at the bottom of the screen ("Done", "Send with these friends", etc)
import { TouchableOpacity, StyleSheet, View, Text, Dimensions } from "react-native";
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { constants } from "../themes/constants";

export default function ChangeVoteButton({pressHandler}) {
    return(    
        <View style={styles.button}>
            <TouchableOpacity onPress={() => {
                    pressHandler();
                }}
                style={styles.clickablePart}
            >
                <Text style={styles.text}>Change vote</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
    },
    clickablePart: {
        backgroundColor: colors.lightgreen,
        borderRadius: 30,
    },
    deactivatedClickablePart: {
        backgroundColor: colors.lightgray,
        borderRadius: constants.buttonBorderRadius,
    },
    text: {
        fontSize: fonts.mediumFontSize,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        paddingVertical: 4,
      }
  });