// To be used for green buttons at the bottom of the screen ("Done", "Send with these friends", etc)
import { TouchableOpacity, StyleSheet, View, Text, Dimensions } from "react-native";
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'

export default function GreenButton({ navigation, title, nextScreen }) {
    return(    
        <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate(nextScreen)} style={styles.clickablePart}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    clickablePart: {
        elevation: 8,
        backgroundColor: colors.lightgreen,
        borderRadius: 30,
        marginVertical: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
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