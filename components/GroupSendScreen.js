import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import CircleIcon from "./CircleIcon"
import Friends from '../utils/Friends'
import { fonts } from "../themes/fonts"

export default function GroupSendScreen({navigation}) {
    // TODO consider some sort of error message when users try to select too many friends (if we think they can ever select too many)
    // TODO add error handeling for if user clicks done when no friends were selected
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Step 1: Rally the Troops! </Text>
            <Text style={styles.subtitle}> These are your availible friends </Text>
            {/* TODO: add search bar if we have time */}
            <View style={styles.listOfFriends}> 
                {Friends.map((friend, index) => {
                    return (<CircleIcon title={friend.name} image={friend.profilePic} />)
                })}
            </View>
            <Button title="Send with these friends" onPress={() => navigation.navigate('TimerScreen')}/>
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
    title: {
        fontSize: fonts.titleFontSize
    },
    subtitle: {
        fontSize: fonts.subtitleFontSize,
        marginBottom: 10
    },
    listOfFriends: {
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap"
    }
  });