import { Dimensions } from "react-native";

const TITLE_FONT_SIZE = 28;
const SUBTITLE_FONT_SIZE = 22;
const CIRCLE_ICON_FONT_SIZE = 15;

export const fonts = {
    // standardizing these here bc it looks like (bassed on the figma) that every title, subtitle, and label will have these style properties in common
    title: {
        fontSize: TITLE_FONT_SIZE,
        alignSelf: 'left',
        fontWeight: '700',
        marginLeft: Dimensions.get('window').width * 0.09,
        marginTop: Dimensions.get('window').height * 0.1,
        marginBottom: Dimensions.get('window').height * 0.01,
    },
    subtitle: {
        fontSize: SUBTITLE_FONT_SIZE,
        alignSelf: 'left',
        fontWeight: 'light',
        marginHorizontal: Dimensions.get('window').width * 0.09,
        fontWeight: '300',
        marginBottom: Dimensions.get('window').height * 0.035,
    },
    labels: {
        fontSize: 22,
        marginBottom: 10,
        alignSelf: 'left',
        fontWeight: '500',
        marginLeft: Dimensions.get('window').width * 0.09,
    },
    largeButton: {
        fontSize: 20,
        paddingHorizontal: Dimensions.get('window').width * 0.10,
        paddingVertical: 14,
        color: "black",
        fontWeight: "bold",
    },
    iconText: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: CIRCLE_ICON_FONT_SIZE,
        color: 'black',
        backgroundColor: "#FFFFFFaa",
        borderRadius: 10,
        overflow:'hidden',
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    titleFontSize: TITLE_FONT_SIZE,
    subtitleFontSize: SUBTITLE_FONT_SIZE,
    mediumFontSize: 20,
    smallFontSize: 15,
    circleIconTextFontSize: 15,
};