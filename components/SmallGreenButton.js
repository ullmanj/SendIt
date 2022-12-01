// To be used for green buttons at the bottom of the screen ("Done", "Send with these friends", etc)
import { TouchableOpacity, StyleSheet, View, Text, Dimensions } from "react-native";
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { constants } from "../themes/constants";

export default function GreenButton({ navigation, title, nextScreen, deactivated=false}) {
    return(    
        <View style={styles.button}>
            <TouchableOpacity onPress={() => {
                    if(!deactivated) {
                        navigation.navigate(nextScreen)
                    }
                }}
                style={deactivated ? styles.deactivatedClickablePart : styles.clickablePart}
            >
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
    },
    clickablePart: {
        // elevation: 8,
        backgroundColor: colors.lightgreen,
        borderRadius: 30,
        // marginVertical: 10,
    },
    deactivatedClickablePart: {
        // elevation: 8,
        backgroundColor: colors.lightgray,
        borderRadius: constants.buttonBorderRadius,
        // marginVertical: 10,
    },
    text: {
        fontSize: fonts.mediumFontSize,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        paddingVertical: 4,
        // width: Dimensions.get('window').width * 0.85 * .15,
        // marginHorizontal: Dimensions.get('window').width * 0.15,
      }
  });