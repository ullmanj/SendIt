import { StyleSheet, View, Text } from "react-native";

export default function SendInfoScreen() {
    return(
        <View style={styles.container}>
            <Text> Send Info Screen. Contains the itinerary, photo stack, and button to enter chat. For past and current sends alike. </Text>
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