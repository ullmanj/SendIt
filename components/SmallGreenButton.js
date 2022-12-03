// To be used for green buttons at the bottom of the screen ("Done", "Send with these friends", etc)
import { TouchableOpacity, StyleSheet, View, Text, Dimensions } from "react-native";
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { constants } from "../themes/constants";

export default function GreenButton({ navigation, title, pressHandler, deactivated=false}) {
    return(    
        <View>
            <TouchableOpacity onPress={() => {
                    if(!deactivated) {
                        pressHandler();
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
    clickablePart: {
        backgroundColor: colors.lightgreen,
        borderRadius: constants.buttonBorderRadius,
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
        paddingHorizontal: 25,
        // width: Dimensions.get('window').width * 0.85 * .15,
        // marginHorizontal: Dimensions.get('window').width * 0.15,
      }
  });