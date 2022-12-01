// To be used for green buttons at the bottom of the screen ("Done", "Send with these friends", etc)
import { TouchableOpacity, StyleSheet, View, Text, Dimensions } from "react-native";
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'

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
        
    },
    clickablePart: {
        elevation: 8,
        backgroundColor: colors.lightgreen,
        borderRadius: 30,
        marginVertical: 10,
        // I got rid of the shadow for cleanliness & more modern design
        // shadowColor: '#171717',
        // shadowOffset: {width: -2, height: 4},
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
    },
    deactivatedClickablePart: {
        elevation: 8,
        backgroundColor: colors.lightgray,
        borderRadius: 30,
        marginVertical: 10,
    },
    text: {
        fontSize: fonts.subtitleFontSize,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        paddingVertical: 14,
        // width: Dimensions.get('window').width * 0.65,
        marginHorizontal: Dimensions.get('window').width * 0.15,
      }
  });