import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatListItem from '../components/ChatListItem';
 
import { Text, View } from '../components/Themed';
import ChatRooms from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton'
export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
      style={ {width:'100%' } }
      data={ChatRooms} 
      renderItem= {({ item }) => <ChatListItem chatRoom={item}/>}
      keyExtractor={(item) => item.id}
      />

      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
