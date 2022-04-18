import React from "react";
import { FlatList, Text, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import ChatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import BG from "../assets/images/BG.png";
import InputBox from "../components/InputBox";

const ChatRoomScreen = () => {
  const route = useRoute();

  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        /*keyExtractor={(item) => item.id}*/
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
