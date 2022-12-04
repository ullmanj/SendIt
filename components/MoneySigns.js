import { StyleSheet, Text, View } from "react-native";
import React, { useState } from 'react';
import { colors } from "../themes/colors";
import { fonts } from '../themes/fonts'

export default function MoneySigns({moneySigns, fontSize=fonts.smallFontSize, fontWeight='600'}) {
    const MAX_NUM_MONEYSIGNS = 3;
    let additionalSigns = "";
    for(let i = 0; i < MAX_NUM_MONEYSIGNS - moneySigns.length; i++) {
        additionalSigns += "$";
    }

    const styles = StyleSheet.create({
        primarySign: {
            fontSize: fontSize,
            fontWeight: fontWeight,
        },
        secondarySign: {
            fontSize: fontSize,
            fontWeight: fontWeight,
            color: colors.darkgray,
        },
    })

    return(
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.primarySign}>
                {moneySigns}
            </Text>
            <Text style={styles.secondarySign}>
                {additionalSigns}
            </Text>
        </View>
    );
}
