// To be used for green buttons at the bottom of the screen ("Done", "Send with these friends", etc)
import { TouchableOpacity, StyleSheet, View, Text, Dimensions } from "react-native";
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { constants } from "../themes/constants";

export default function GreenButton({ navigation, title, nextScreen, deactivated=false, paramsToPassOn=null, deactivatedPressHandler=null, explicitNavigationFunction=null}) {
    return(    
        <View>
            <TouchableOpacity onPress={() => {
                    if(!deactivated) {
                        if (explicitNavigationFunction !== null) {
                            explicitNavigationFunction();
                        } else {
                            if (!paramsToPassOn) {
                                navigation.navigate(nextScreen);
                            } else {
                                navigation.navigate(nextScreen, paramsToPassOn);
                            }
                        }
                    } else {
                        if (deactivatedPressHandler !== null) {
                            deactivatedPressHandler();
                        }
                    }
                }}
                style={deactivated ? styles.deactivatedClickablePart : styles.clickablePart}
            >
                <Text style={fonts.largeButton}>{title}</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    clickablePart: {
        backgroundColor: colors.lightgreen,
        borderRadius: constants.buttonBorderRadius,
        marginVertical: 10,
        // I got rid of the shadow for cleanliness & more modern design
        // elevation: 8,
        // shadowColor: '#171717',
        // shadowOffset: {width: -2, height: 4},
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
    },
    deactivatedClickablePart: {
        // elevation: 8,
        backgroundColor: colors.lightgray,
        borderRadius: constants.buttonBorderRadius,
        marginVertical: 10,
    },
  });