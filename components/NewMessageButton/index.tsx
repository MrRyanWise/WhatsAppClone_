import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {View} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
 
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
 
const NewMessageButton = () =>{
    const navigation = useNavigation();

    const onPress = () =>{
        navigation.navigate('Contacts');
    }

    return(
        <View style={{
            backgroundColor:Colors.light.tint,
            width:50,
            height:50,
            borderRadius:25,
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            bottom:20,
            right:20,
        }}> 
            <TouchableOpacity onPress={onPress}> 
                <MaterialCommunityIcons
                    name="message-reply-text"
                    size={28}
                    color="white"
                />
             </TouchableOpacity>
        </View>
       
    )
}

    export default NewMessageButton;