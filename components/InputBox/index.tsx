import React, { useState } from "react";
import { Text, View , TextInput} from "react-native";
import styles from "./style";

import{
    MaterialCommunityIcons,
    FontAwesome5,
    Entypo,
    Fontisto,
    MaterialIcons,
}from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () =>{

    }
    const onSendPress= () =>{
        
    }

    const onPress = () =>{
        if(!message){
            onMicrophonePress();
        }else{
            onSendPress();
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.mainContainer}>
            <FontAwesome5 name="laugh-beam" size={24} color="grey" />
            <TextInput 
            placeholder={"Type a Message"}
            style={styles.textInput} 
            multiline
            value={message}
            onChangeText={setMessage}
            />
            <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
            {!message &&  <Fontisto name="camera" size={24} color="grey" style={styles.icon} /> }
        </View>

        <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
           {!message 
           ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
           :<MaterialIcons name="send" size={28} color="white" />
        } 
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default  InputBox;
