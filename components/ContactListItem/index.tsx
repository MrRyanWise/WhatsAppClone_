import React from "react";
import { User } from "../../types";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
 
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export type ContactListItemProps = {
  user: User;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;
  const navigation = useNavigation();
 
  const onClick = () => {
    //navigate to chat room with this user
  }

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.lefContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          
          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text> 
            <Text numberOfLines={2} styles={styles.status}>{user.status}</Text>     
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;