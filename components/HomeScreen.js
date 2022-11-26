import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text> Home Screen </Text>
            <Button title="Update interests" onPress={() => navigation.navigate('SelectInterestsScreen')}/>
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