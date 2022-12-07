import { StyleSheet, SafeAreaView, Alert, Pressable, View, TouchableOpacity, Text, Dimensions, Image} from "react-native";
import { GiftedChat, Bubble, Actions } from "react-native-gifted-chat"
import React, { useState } from 'react';
import { colors } from "../themes/colors";
import ChatHeader from "./ChatHeader"
import { Icon } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'; 
// import * as ImagePicker from "react-native-image-picker"
import { Octicons } from '@expo/vector-icons';

export default function ChatScreen({ navigation, route }) {
    const activity = route.params.activity
    const backScreen  = route.params?.backScreen != null ? route.params.backScreen : 'HomeScreen' 
    const backStack  = route.params?.backStack != null ? route.params.backStack : 'HomeStack' 
    // const participants = route.params.participants
    const [messages, setMessages] = useState([
          {
            _id: 2,
            text: 'Me too!! How should we get there? I was thinking we could carpool - I can drive!',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Rachel', 
              avatar: require('../utils/profilePics/rachel_profilePic.png'),
            },
          },
          {
            _id: 3,
            text: 'I am so hyped! I\'ve been wanting to do this activity for so long!',
            createdAt: new Date().getTime(),
            user: {
                _id: 3,
                name: 'Jamie', // TODO change to name of one of the people in the send if you have time 
                avatar: require('../utils/profilePics/jamie_profilePic.png'), // TODO update to right photo
            },
        },
        {
            _id: 1,
            text: 'Ready to Send It?! \n\nBased on the results of the voting, you’re all headed to ' + activity.name + ' located at 459 University Avenue' +
            '. This location is open from ' + activity.hours + ', and the price range is ' + activity.price +
            '.\n\nFeel free to use this chat to coordinate with your group and share photos. Although I’m a bot, '+
            'I cannot wait to see all the new memories you’re about to create!',
            createdAt: new Date().getTime(),
            user: {
                _id: 1,
                name: 'Send It!',
                avatar: require('../utils/miscPics/sendItLogo.png'), // todo maek this larger
            },
        },
    ]);

    function handleSend(newMessage = []) {
        console.log("new message: ", newMessage)
        setMessages(GiftedChat.append(messages, newMessage));
    }

    function renderBubble(props) {
          return (
            <View>
              <Text style={
                props.currentMessage.user.name == "Send It!" ? {...styles.chatName, fontWeight: '700', color: colors.darkpink} : styles.chatName
              }>{props.currentMessage.user.name}</Text>
              <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: colors.lightgray,
                        width: Dimensions.get('screen').width * 0.7
                    },
                    right: {
                        backgroundColor: colors.darkgreen,
                        maxWidth: Dimensions.get('screen').width * 0.7
                    }
                }}
                textStyle={{
                  right: {
                      color: '#FFFFFF'
                  }
                }}
              />
            </View>
          );
    }

    const handlePickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
      });
      
      console.log(result)
      if (result.canceled) {
        return
      }          

      let newMessage = {
        _id: 50,
        createdAt: new Date(),
        user: {},
        image: result.assets[0].uri
      }
      handleSend(newMessage)
      return    
    };

    function renderActions() {
      return (
        <Pressable onPress={() => {  // Back button renders regardless of map rendering status
          Alert.alert(
              'Send an Image',
              "Images you send in the chat will appear in the Send Log once the send is completed! You can also attach photos after the send is completed.",
              [
                {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                {text: 'Select from camera roll', onPress: () => {
                  handlePickImage()
                }},
              ],
              { cancelable: false }
            )
      }}>
          <Octicons color={colors.darkgreen} name="device-camera" size={40}/>
        </Pressable>
      )
    }

    return (
        <View style={styles.container}>
          <GiftedChat
            messages={messages}
            onSend={newMessage => { handleSend(newMessage)} }
            placeholder='Write a message here...'
            renderBubble={renderBubble}
            renderActions={renderActions}
          />
          <ChatHeader navigation={navigation} activity={route.params.activity} backScreen={backScreen} backStack={backStack}/>
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
    chatName: {
        fontSize: 15,
        color: colors.darkgreen,
        marginLeft: 10,
        fontWeight: '500'
    },
  });