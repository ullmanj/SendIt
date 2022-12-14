import { StyleSheet, View, Text, Button, SectionList, Dimensions, FlatList, SafeAreaView } from "react-native";
import Interests from "../utils/Interests"
import CircleIcon from "./CircleIcon"
import GreenButton from "./GreenButton"
import WideGreenButton from "./WideGreenButton";
import { fonts } from "../themes/fonts"
  
export default function UpdateInterestsScreen({navigation, route}) {
    const backTab = 'TabBarGroup';
    const backScreen  = route.params?.backScreen != null ? route.params.backScreen : 'HomeScreen';
    const backStack  = route.params?.backStack != null ? route.params.backStack : 'HomeStack';

    renderSection = ({ item }) => {
      return (
        <View style={{marginBottom: 20}}> 
          <FlatList
          data={item.list}
          numColumns={3}
          renderItem={renderListItem}
          keyExtractor={keyExtractor}
          initialNumToRender={6}
        />
        </View>
      )
    }
  
    renderSectionHeader = ({ section }) => {
      return <Text style={{
        ...fonts.labels, 
        // to help with visibility of section header when scrolling down
        marginLeft: 0,
        paddingLeft: Dimensions.get('window').width * 0.04,
        backgroundColor: 'white',
        width: '100%',
      }}>{section.title}</Text>
    }
  
    renderListItem = ({ item }) => {
        // making some items pre-selected so it seems like a user is returning to the app
        let preselected = false;
        if (item.name == "Concerts" || item.name == "Sweet" || item.name == "Hiking" || item.name == "Yoga" ||
          item.name == "Museums"|| item.name == "Musicals") {
          preselected = true
        }
        return (
            <CircleIcon title={item.name} image={item.image} preselected={preselected}/>
        )
    }
  
    keyExtractor = (item) => {
      return item.name
    }
  
    return (
        <SafeAreaView style={styles.container}>
            <Text style={fonts.title}>Update your interests</Text>
            <SectionList
                sections={Interests}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderSection}
            /> 
            <View style={styles.doneButton}>
              <WideGreenButton navigation={navigation} title="Done"
                explicitNavigationFunction={() => navigation.navigate(backTab, {
                  screen: backStack,
                  params: {
                    screen: backScreen
                  }
                })}/>
            </View>
        </SafeAreaView>

    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    doneButton: {
      paddingTop: 5,
      paddingBottom: 10,
      width: '85%',
      alignItems: 'center',
      marginVertical: 10
    },
  });