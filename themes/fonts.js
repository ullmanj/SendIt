import { Dimensions } from "react-native";

export const fonts = {
    // standardizing these here bc it looks like (bassed on the figma) that every title, subtitle, and label will have these style properties in common
    title: {
        fontSize: 28,
        alignSelf: 'left',
        fontWeight: '700',
        marginLeft: Dimensions.get('window').width * 0.09,
        marginTop: Dimensions.get('window').height * 0.1,
        marginBottom: Dimensions.get('window').height * 0.01,
    },
    subtitle: {
        fontSize: 22,
        alignSelf: 'left',
        fontWeight: 'light',
        marginLeft: Dimensions.get('window').width * 0.09,
        fontWeight: '400',
        marginBottom: Dimensions.get('window').height * 0.035,
    },
    labels: {
        fontSize: 22,
        marginBottom: 10,
        alignSelf: 'left',
        fontWeight: '500',
        marginLeft: Dimensions.get('window').width * 0.09,
    },
    mediumFontSize: 20,
    smallFontSize: 15,
    circleIconTextFontSize: 15,
};