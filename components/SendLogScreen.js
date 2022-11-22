import { StyleSheet, View, Text } from "react-native";

export default function SendLogScreen() {
    return(
        <View style={styles.container}>
            <Text> Send Log Screen </Text>
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