import { Dimensions } from "react-native";
import { colors } from '../themes/colors'

export const shapes = {
    circle: {
        marginHorizontal: Dimensions.get('window').width * 0.041,
        width: Dimensions.get('window').width * 0.22,
        height: Dimensions.get('window').width * 0.22,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
        marginTop: 10,
        borderRadius: 100, 
        borderColor: colors.lightpink, 
        // shadowColor: '#171717',
        // shadowOffset: {width: 0, height: 0},
        // shadowOpacity: 0.8,
        // shadowRadius: 4,
    },
};