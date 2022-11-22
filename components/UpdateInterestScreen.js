import { StyleSheet, View, Text } from "react-native";

export default function UpdateInterestScreen() {
    return(
        <View style={styles.container}>
            <Text> Update Interest Screen </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });