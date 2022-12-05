import { StyleSheet, View, Dimensions, Image } from "react-native";
import { useState } from "react";
import { Switch } from 'react-native-switch';
import { constants } from "../themes/constants";
import { colors } from "../themes/colors";
import { FontAwesome } from '@expo/vector-icons';

    const VERT_SIZE = Dimensions.get('window').width * 0.2;
    const CIRCLE_SIZE = VERT_SIZE * 0.8;
    const PLANE_ICON_SIZE = CIRCLE_SIZE * 0.6;
    const CRUMPLED_ICON_SIZE = CIRCLE_SIZE * 0.7;
    const DISTANCE_FROM_EDGE_FACTOR = 1.2;
    const WIDTH_FACTOR = 3;

export default function Toggle({ isFree, setIsFree }) {
    
    const toggleSwitch = () => setIsFree((previousState) => !previousState);
    const borderColor = isFree ? colors.darkpink : colors.darkgray;

    return(
        <View style={
            {
                borderWidth: 1,
                borderColor: borderColor,
                borderRadius: '100%',
            }}>
            <Switch
                barHeight={VERT_SIZE}
                circleSize={CIRCLE_SIZE}
                value={isFree}
                onValueChange={toggleSwitch}
                disabled={false}
                backgroundActive={colors.lightpink}
                backgroundInactive={colors.lightgray}
                circleActiveColor='white'
                circleInActiveColor='white'
                renderInsideCircle={() => <InnerCircle isFree={isFree}/>}
                circleBorderWidth={1}
                changeValueImmediately={false} // wait for animation to complete
                innerCircleStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: borderColor,
                    }
                }
                renderActiveText={false}
                renderInActiveText={false}
                switchLeftPx={DISTANCE_FROM_EDGE_FACTOR} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                switchRightPx={DISTANCE_FROM_EDGE_FACTOR} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                switchWidthMultiplier={WIDTH_FACTOR} // multiplied by the `circleSize` prop to calculate total width of the Switch
                // switchBorderRadius='100%'
            />
        </View>
    );
}

function InnerCircle({isFree}) {
    if(isFree) {
        return(
            <View style={styles.planeIconContainer}>
                <FontAwesome name={'paper-plane'} size={PLANE_ICON_SIZE} color={isFree ? colors.darkpink : colors.lightgray} />
            </View>
        );
    } else {
        return(
            <Image style={styles.crumpledIcon} source={require('../utils/miscPics/crumpledPaper.png')}/>
        )
    }
}

const styles = StyleSheet.create({
    planeIconContainer: {
        paddingRight: '8%'
    },
    crumpledIcon: {
        resizeMode: "contain",
        width: CRUMPLED_ICON_SIZE,
        height: CRUMPLED_ICON_SIZE,
    },
});