// To be used for green buttons at the bottom of the screen ("Done", "Send with these friends", etc)
import { TouchableOpacity, StyleSheet, View, Text, Dimensions } from "react-native";
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { constants } from "../themes/constants";

export default function WideGreenButton({ navigation, title, nextScreen, deactivated=false, paramsToPassOn=null, deactivatedPressHandler=null, explicitNavigationFunction=null, activeColor=colors.lightgreen}) {
    const styles = StyleSheet.create({
        buttonContainer: {
            // width: Dimensions.get('window').width * .85,
            width: '100%',
        },
        clickablePart: {
            backgroundColor: activeColor,
            borderRadius: constants.buttonBorderRadius,
        },
        deactivatedClickablePart: {
            backgroundColor: colors.lightgray,
            borderRadius: constants.buttonBorderRadius,
        },
      });
    
    return(    
        <View style={styles.buttonContainer}>
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
                <Text style={[fonts.largeButton, {alignSelf: 'center'}]}>{title}</Text>
            </TouchableOpacity>
        </View>
        
    );
}