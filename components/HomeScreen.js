import { StyleSheet, View, Text, Button } from "react-native";
import { fonts } from "../themes/fonts";

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={fonts.title}>Pending Invites</Text>
            <Text style={fonts.title}>Your Status</Text>
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