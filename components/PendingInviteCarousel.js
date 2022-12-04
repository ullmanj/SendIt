import PendingInvites from '../utils/PendingInvites';
import PendingInvite from './PendingInvite';
import React from 'react';
// import Carousel from 'react-native-reanimated-carousel';
import { Dimensions, Text, View } from 'react-native';

export default function PendingInviteCarousel() {

    const renderItem = ({item}) => {
        return (
            <PendingInvite invite={item}/>
        );
    }

    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            
        </View>
    );
}


