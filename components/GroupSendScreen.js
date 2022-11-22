import { StyleSheet, View, Text } from "react-native";

export default function GroupSendScreen() {
    return(
        <View style={styles.container}>
            <Text> Group Send Screen </Text>
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