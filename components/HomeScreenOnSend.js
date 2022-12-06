import { StyleSheet, SafeAreaView, View, Text, Button, Dimensions } from "react-native";
import { fonts } from "../themes/fonts";

export default function HomeScreenOnSend({setCurrentSend}) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={[fonts.title, styles.extraTitleStyling]}>Current Send</Text>
            <Button title={'complete'} onPress={() => setCurrentSend(null)}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    extraTitleStyling: {
        marginBottom: Dimensions.get('window').height * 0.025
    },
});