// SOURCE: https://github.com/wcandillon/can-it-be-done-in-react-native/blob/master/bonuses/tabbar/components/StaticTabbar.tsx

import * as React from "react";
import {
  View, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions,
} from "react-native";
import { Octicons, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { Text } from "react-native-svg";
import { colors } from "../themes/colors";

const { width } = Dimensions.get("window");

interface Tab {
  name: string;
}

interface StaticTabbarProps {
  tabs: Tab[];
  value: Animated.Value;
}

export default class StaticTabbar extends React.PureComponent<StaticTabbarProps> {
  values: Animated.Value[] = [];

  constructor(props: StaticTabbarProps) {
    super(props);
    const { tabs } = this.props;
    this.values = tabs.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0));
  }

  onPress = (index: number) => {
    const { value, tabs } = this.props;
    const tabWidth = width / tabs.length;
    Animated.sequence([
      Animated.parallel(
        this.values.map(v => Animated.timing(v, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        })),
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true,
        }),
        Animated.spring(this.values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }

  render() {
    const { onPress } = this;
    const { tabs, value } = this.props;
    return (
      <View style={styles.container}>
        {
          tabs.map((tab, key) => {
            const tabWidth = width / tabs.length;
            const cursor = tabWidth * key;
            const opacity = value.interpolate({
              inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
              outputRange: [1, 0, 1],
              extrapolate: "clamp",
            });
            const translateY = this.values[key].interpolate({
              inputRange: [0, 1],
              outputRange: [64, 0],
              extrapolate: "clamp",
            });
            const opacity1 = this.values[key].interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: "clamp",
            });
            return (
              <React.Fragment {...{ key }}>
                <TouchableWithoutFeedback onPress={() => onPress(key)}>
                  <Animated.View style={[styles.tab, { opacity }]}>
                    {tab.name === 'paper-airplane' && <FontAwesome name={'paper-plane-o'} size={38} color={'black'} />}
                    {tab.name === 'home' && <Ionicons name="home-outline" size={42} color={'black'} />}
                    {tab.name === 'clock' && <AntDesign name="clockcircleo" size={40} color={'black'} />}
                  </Animated.View>
                </TouchableWithoutFeedback>
                <Animated.View
                  style={{
                    position: "absolute",
                    top: -8,
                    left: tabWidth * key,
                    width: tabWidth,
                    height: 64,
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: opacity1,
                    transform: [{ translateY }],
                  }}
                >
                  <View style={styles.activeIcon}>
                    {tab.name === 'paper-airplane' && <FontAwesome name={'paper-plane'} size={38} color={colors.darkgreen} />}
                    {tab.name === 'home' && <Ionicons name="home" size={42} color={colors.darkgreen} />}
                    {tab.name === 'clock' && <AntDesign name="clockcircle" size={40} color={colors.darkgreen} />}
                  </View>
                </Animated.View>
              </React.Fragment>
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 64,
  },
  activeIcon: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});