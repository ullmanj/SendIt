import { SafeAreaView, View, Text, Dimensions, Pressable, useWindowDimensions, Image } from "react-native";
import { fonts } from '../themes/fonts'
import { colors } from '../themes/colors'
import { constants } from "../themes/constants";
import PendingInvite from "./PendingInvite";
import React, {useState, useEffect, useRef} from 'react';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    useAnimatedRef,
  } from 'react-native-reanimated';

export default function ImageCarousel({data}) {
    const scrollViewRef = useAnimatedRef(null);
    const interval = useRef();
    const [newData] = useState([
      {key: 'spacer-left'},
      ...data,
      {key: 'spacer-right'},
    ]);
    const {width} = useWindowDimensions();
    const SIZE = width * 0.7; // width of each pending invite
    const SPACER = (width - SIZE) / 2;
    const x = useSharedValue(0);
    const offSet = useSharedValue(0);
    
    // this is what keeps the proceeding invites from getting smaller and smaller
    const onScroll = useAnimatedScrollHandler({
      onScroll: event => {
        x.value = event.contentOffset.x;
      },
    });
  
    useEffect(() => {
        clearInterval(interval.current);
    }, [SIZE, SPACER, false, data.length, offSet.value, scrollViewRef]);
  
    return (
      <SafeAreaView style={{height: Dimensions.get('screen').height * 0.4}}>
        <Animated.ScrollView
          ref={scrollViewRef}
          onScroll={onScroll}
          onMomentumScrollEnd={e => {
            offSet.value = e.nativeEvent.contentOffset.x;
          }}
          scrollEventThrottle={16} // determines how much the onScroll is fired (i think a higher number here = smoother scroll, but you don't want to make it too high)
          decelerationRate="fast"
          snapToInterval={SIZE}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}>
          {newData.map((item, index) => {
            const style = useAnimatedStyle(() => {
              const scale = interpolate(
                x.value,
                [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                [0.8, 1, 0.8], // [size ratio of right invite, size ratio of middle invite, size ratio of left invite]
              );
              return {
                transform: [{scale}],
              };
            });
            if (!item.name) {
              return <View style={{width: SPACER}} key={index} />;
            }
            return (
                <View key={index}>
                    <Animated.View style={[style]}>
                      <Pressable onPress={() => {
                          navigation.navigate('LogStack', {
                            screen: 'SendInfoScreen',
                            params: { activity: item },
                        })
                      }}>
                        <View style={{flexDirection: 'column'}}>
                          <Image style={{width: SIZE, height: SIZE, aspectRatio: 1, borderRadius: 20, marginBottom: 10}}
                            source={item.photos[0]}/>
                          <Text style={{fontSize: fonts.mediumFontSize, textAlign: 'center'}}>{item.name}</Text>
                        </View>
                      </Pressable>
                    </Animated.View>
                </View>
            );
          })}
        </Animated.ScrollView>
      </SafeAreaView>
    );
  };