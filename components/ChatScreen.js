import { StyleSheet, View, Text, Dimensions } from "react-native";
import { GiftedChat, Bubble, Actions } from "react-native-gifted-chat"
import React, { useState } from 'react';
import { colors } from "../themes/colors";
import ChatHeader from "./ChatHeader"
import { Icon } from 'react-native-elements'
// import * as ImagePicker from 'expo-image-picker'; 
import * as ImagePicker from "react-native-image-picker"
import { Octicons } from '@expo/vector-icons';

export default function ChatScreen({ navigation, route }) {
    const activity = route.params.activity
    const [messages, setMessages] = useState([
        {
            _id: 3,
            text: 'Guys, no words can describe how hyped I am right now. I\'ve been wanting to do this activity for so long!',
            createdAt: new Date().getTime(),
            user: {
                _id: 3,
                name: 'James Landay', // TODO change to name of one of the people in the send if you have time 
                avatar: require('../utils/profilePics/jamie_profilePic.png'), // TODO update to right photo
            },
        },
        {
            _id: 1,
            text: 'Ready to Send It?! \n\nYou’re all headed to ' + activity.name + ' located at 459 University Avenue' +
            '. This location is open from ' + activity.hours + ', and the price range is ' + activity.price +
            '.\n\nFeel free to use this chat to coordinate with your group. Although I’m a bot, '+
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
        console.log(newMessage)
        setMessages(GiftedChat.append(messages, newMessage));
    }

    function renderBubble(props) {
          return (
            <View>
              <Text style={
                props.currentMessage.user.name == "Send It!" ? {...styles.chatName, fontWeight: '700'} : styles.chatName
              }>{props.currentMessage.user.name}</Text>
              <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: colors.lightgray,
                    },
                    right: {
                        backgroundColor: colors.darkgreen
                    }
                }}
                textStyle={{
                  right: {
                      color: '#fff'
                  }
                }}
              />
            </View>
          );
    }

    // NOTE ignor all of this code for now. couldn't figure out how to actually upload a photo to the chat -> will come back to it later
    // async function handlePickImage() {
    //   // No permissions request is necessary for launching the image library
    //   let result = await ImagePicker.launchImageLibraryAsync({
    //       mediaTypes: ImagePicker.MediaTypeOptions.All,
    //       allowsEditing: true,
    //       aspect: [4, 3],
    //       quality: 1,
    //   });

    //   return result
    // };

    function handleAddPicture() {
      // const { user } = data; // wherever you user data is stored;
      // const options = {
      //   title: "Select Profile Pic",
      //   mediaType: "photo",
      //   takePhotoButtonTitle: "Take a Photo",
      //   maxWidth: 256,
      //   maxHeight: 256,
      //   allowsEditing: true,
      //   noData: true
      // };
      ImagePicker.launchCamera(response => {
        console.log("Response = ", response);
        if (response.didCancel) {
          return
        } else if (response.error) {
          // alert error
        } else {
          const { uri } = response;
          const extensionIndex = uri.lastIndexOf(".");
          const extension = uri.slice(extensionIndex + 1);
          const allowedExtensions = ["jpg", "jpeg", "png"];
          const correspondingMime = ["image/jpeg", "image/jpeg", "image/png"];
          const options = {
            keyPrefix: "****",
            bucket: "****",
            region: "****",
            accessKey: "****",
            secretKey: "****"
          };
          const file = {
            uri,
            name: `${this.messageIdGenerator()}.${extension}`,
            type: correspondingMime[allowedExtensions.indexOf(extension)]
          };
          RNS3.put(file, options)
         .progress(event => {
           console.log(`percent: ${event.percent}`);
         })
         .then(response => {
           console.log(response, "response from rns3");
           if (response.status !== 201) {
             alert(
             "Something went wrong. The image was not uploaded"
             );
             console.error(response.body);
             return;
           }
           const message = {};
           id = this.messageIdGenerator();
           message._id = id;
           message.createdAt = Date.now();
           message.user = {
             _id: id,
             name: "You",
            //  avatar: require('../utils/interestsPics/')
           };
           message.image = response.headers.Location;
           message.messageType = "image";
          //  this.chatsFromFB.update({
          //    messages: [message, ...this.state.messages]
          //  });

          //  handleSend(message);
         });
         if (!allowedExtensions.includes(extension)) {
           return alert("That file type is not allowed.");
         }
       }
    });
    };

    function renderActions(props) {
      return (
        <Actions
          {...props}
          options={{
            ['Select a photo']: handleAddPicture,
          }}
          icon={() => (
             <Octicons name='device-camera' size={40} width={50} color={colors.darkgreen} />          
          )}
          onSend={args => console.log("ONSEND IN RENDERACTIONS") }
        />
      )
    }

    return (
        <View style={styles.container}>
          <ChatHeader navigation={navigation} activity={route.params.activity} backScreen={route.params.backScreen}/>
          <GiftedChat
            messages={messages}
            onSend={newMessage => { handleSend(newMessage)} }
            placeholder='Write a message here...'
            showUserAvatar
            renderBubble={renderBubble}
            // renderActions={renderActions}
          />
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
    }
  });