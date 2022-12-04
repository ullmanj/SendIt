import PendingInvites from '../utils/PendingInvites';
import PendingInvite from './PendingInvite';
import React from 'react';
// import Carousel from 'react-native-reanimated-carousel';
import { Dimensions, Text, View, FlatList} from 'react-native';

export default function PendingInviteCarousel() {

    const renderItem = ({item}) => {
        return (
            <PendingInvite invite={item}/>
        );
    }

    return (
        <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={ PendingInvites }
            renderItem={renderItem}
            keyExtractor={(_, index) => index}
            initialNumToRender={6}
        />
    );
}


