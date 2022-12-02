import { StyleSheet, View, Text, Button, SectionList, Dimensions, FlatList } from "react-native";
import Interests from "../utils/Interests"
import CircleIcon from "./CircleIcon"
import GreenButton from "./GreenButton"
import { fonts } from "../themes/fonts"
import React, { useState } from 'react';
  
export default function UpdateInterestsScreen({navigation, route}) {
    // const [DestinationName, setDestinationName] = useState(route?.params?.nextScreen ? route.params.nextScreen : "HomeStack")
    let DestinationName = route?.params?.nextScreen ? route.params.nextScreen : "HomeStack";

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
        return (
            <CircleIcon title={item.name} image={item.image}/>
        )
    }
  
    keyExtractor = (item) => {
      return item.name
    }
  
    return (
        <View style={styles.container}>
            <Text style={fonts.title}>Update your interests</Text>
            <SectionList
                sections={Interests}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderSection}
            /> 
            <View style={styles.doneButton}>
              <GreenButton navigation={navigation} title="Done"
                explicitNavigationFunction={() => navigation.navigate('TabBarGroup', { screen: {DestinationName} })}/>
            </View>
        </View>

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
    },
  });