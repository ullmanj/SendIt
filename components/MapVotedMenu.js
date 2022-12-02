// Circle Icon component for when the text/title is on top of the icon (like on the Select Interests screen)

import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import React, { useState, useCallback} from 'react';
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { constants } from "../themes/constants";
import { useNavigation } from "@react-navigation/native";
import ChangeVoteButton from "./ChangeVoteButton";

export default function MapVotedMenu({ voteHandler }) {
    return(
        <View style={styles.body}>
            <ChangeVoteButton pressHandler={voteHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        width: Dimensions.get('window').width * 0.85,
        height: undefined,
        backgroundColor: colors.white,
        borderRadius: constants.borderRadius,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
    },
  });