import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from "react-native";
import OutdoorInterests from "../utils/OutdoorInterests"
import IndoorInterests from "../utils/IndoorInterests"
import EntertainmentInterests from "../utils/EntertainmentInterests"
import FoodInterests from "../utils/FoodInterests"
import CircleIcon from "./CircleIcon"
import { fonts } from "../themes/fonts"

export default function SelectInterestsScreen({navigation}) {   
    return(
        // TODO update the photos in OutdoorInterest, IndoorInterests, EntertainmentInterests, and FoodInterests. 
        // photos will need to be added to utils/interestPics and then updated in the respective js files
        <View style={styles.container}>
            <Text style={styles.title}>Select your interests</Text>
            <Text style={styles.subtitle}>Outdoors</Text>
            <View style={styles.listOfFriends}> 
                {OutdoorInterests.map((interest, index) => {
                    return (<CircleIcon title={interest.name} image={interest.image} key={index}/>)
                })}
            </View>
            <Text style={styles.subtitle}>Indoors</Text>
            <View style={styles.listOfFriends}> 
                {IndoorInterests.map((interest, index) => {
                    return (<CircleIcon title={interest.name} image={interest.image} key={index}/>)
                })}
            </View>
            <Text style={styles.subtitle}>Entertainment</Text>
            <View style={styles.listOfFriends}> 
                {EntertainmentInterests.map((interest, index) => {
                    return (<CircleIcon title={interest.name} image={interest.image} key={index}/>)
                })}
            </View>
            <Text style={styles.subtitle}>Food</Text>
            <View style={styles.listOfFriends}> 
                {FoodInterests.map((interest, index) => {
                    return (<CircleIcon title={interest.name} image={interest.image} key={index}/>)
                })}
            </View>
            <Button title="Done" onPress={() => navigation.navigate('HomeScreen')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: fonts.titleFontSize,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: fonts.subtitleFontSize,
    },
    listOfFriends: {
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });