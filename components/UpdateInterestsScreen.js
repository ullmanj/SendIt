import { StyleSheet, View, Text, Button, SectionList, Dimensions, FlatList } from "react-native";
import Interests from "../utils/Interests"
import CircleIcon from "./CircleIcon"
import GreenButton from "./GreenButton"
import { fonts } from "../themes/fonts"
  
export default function UpdateInterestsScreen({navigation}) {
    renderSection = ({ item }) => {
      return (
        <FlatList
          data={item.list}
          numColumns={3}
          renderItem={renderListItem}
          keyExtractor={keyExtractor}
          initialNumToRender={6}
        />
      )
    }
  
    renderSectionHeader = ({ section }) => {
      return <Text style={styles.subtitle}>{section.title}</Text>
    }
  
    renderListItem = ({ item }) => {
        return (
            <CircleIcon title={item.name} image={item.image}/>
        )
    }
  
    keyExtractor = (item) => {
      return item.name
    }
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update your interests</Text>
            <SectionList
                sections={Interests}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderSection}
            /> 
            <View style={styles.doneButton}>
              <GreenButton navigation={navigation} title="Done" nextScreen="TabBarGroup" />
            </View>
        </View>

    )
  }

const styles = StyleSheet.create({
    title: {
        fontSize: fonts.titleFontSize,
        marginBottom: 10,
        fontWeight: 'bold',
        marginTop: Dimensions.get('window').height * 0.07,
    },
    subtitle: {
        fontSize: fonts.subtitleFontSize,
        backgroundColor: "#FFFFFFa0",
        paddingLeft: Dimensions.get('window').width * 0.06,
        width: Dimensions.get('window').width ,
        backgroundColor: 'white',
        paddingVertical: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    doneButton: {
      paddingTop: 5,
      paddingBottom: 10,
    },
  });