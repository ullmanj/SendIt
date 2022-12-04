import { StyleSheet, View, SafeAreaView, Text, Button, Dimensions, FlatList } from "react-native";
import { colors } from "../themes/colors";
import { constants } from "../themes/constants";
import { fonts } from "../themes/fonts";
import Friends from "../utils/Friends";
import CircleIcon from "./CircleIcon";
import PlainCircleIconOptionalTextBelow from "./PlainCircleIconOptionalTextBelow";

export default function PendingInvite({ invite }){
    const renderListItem = ({item}) => {
        console.log(item)
        return(
            <PlainCircleIconOptionalTextBelow image={item.profilePic} subtitle={item.name} widthFactor={0.11} heightFactor={0.11}/>
        );
    }

    return(
        <View style={styles.inviteContainer}>
            <View style={{width: '100%'}}>
                <Text style={styles.title}>
                    Send it with
                </Text>
                <FlatList
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    data={ invite.participants }
                    renderItem={renderListItem}
                    keyExtractor={(item, index) => item.name}
                    initialNumToRender={6}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inviteContainer: {
      backgroundColor: colors.lightgreen,
      alignItems: 'center',
      justifyContent: 'center',
      height: Dimensions.get('window').height * 0.5,
      width: Dimensions.get('window').width * 0.7,
      borderRadius: constants.borderRadius,
      padding: Dimensions.get('window').width * 0.06,
    },
    title: {
        fontSize: fonts.titleFontSize,
        fontWeight: 'bold',
    }
  });