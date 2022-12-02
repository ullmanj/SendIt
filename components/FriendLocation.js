import { StyleSheet, Image, View, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';  // this import fixes bugs
import { colors } from "../themes/colors";
import { fonts } from "../themes/fonts";

export default function FriendLocation(props) {
    return(
        <View>
            <View style={{alignItems: 'center'}}>
                <View style={styles.outerCircle}/>
                <View style={styles.innerCircle}/>
            </View>
            <Text style={styles.name}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    outerCircle: {
        width: 32,
        height: 32,
        backgroundColor: colors.lightpink + '9e',
        borderRadius: 100
    },
    innerCircle: {
        width: 17,
        height: 17,
        backgroundColor: colors.darkpink,
        borderRadius: 100,
        marginVertical: 8,
        position: 'absolute',
        alignSelf: 'center'
    },
    name: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: fonts.circleIconTextFontSize,
        color: 'black',
        backgroundColor: "#FFFFFFaa",
        borderRadius: 10,
        overflow:'hidden',
        paddingHorizontal: 5,
        paddingVertical: 2,
        // fontWeight: 'bold'
    },
})