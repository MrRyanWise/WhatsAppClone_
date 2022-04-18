/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */ 
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps,BottomTabScreenProps  } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

 
 import { Ionicons,Zocial,Fontisto,Octicons,MaterialCommunityIcons } from '@expo/vector-icons'; 
 
 import{View} from "react-native"; 
import ChatsScreen from '../screens/ChatsScreen';
 
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';
 

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: Colors.light.tint,
        
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign:"left", 
      headerTitleStyle:{
        fontWeight:'bold',
      }
    }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} 
       options={{
         title:"WhatsApp",
         headerRight: () => (
          <View style={{
            flexDirection: 'row',
            width: 60,
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
              <Octicons name="search" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
          </View>  
        )
         
         }}/>

      <Stack.Screen
       name="ChatRoom"
        component={ChatRoomScreen} 
        options={({ route}) =>({
          title: route.params.name,
        headerRight:() =>(
          <View style = {{
                 flexDirection:'row',
                 width:100,
                 justifyContent:'space-between',
                 marginRight:10,
          }} >
            <Ionicons name="md-call-sharp" size={22} color={'white'} />
            <FontAwesome5 name="video" size={22} color={'white'}/>
            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
          </View>

        )
      })} 
      />
      <Stack.Screen 
      name="Contacts" 
      component={ContactsScreen}
      options={{ title: 'Contacts' }}
       />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Chats"
     
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle : {
              backgroundColor : Colors[colorScheme].tint,
        }
      }}>
 
      <BottomTab.Screen
        name="Camera"
        component={TabOneScreen}
        options={{
          title: 'Camera',
          tabBarIcon: ({ color }) => <Fontisto name="camera" size={20} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          title: 'Chats',
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-sharp" size={24} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Status"
        component={TabTwoScreen}
        options={{
          title: 'Status',
          tabBarIcon: ({ color }) =><Ionicons name="ios-checkmark-done-circle-outline" size={24} color={color}/> ,
        }}
      />

<BottomTab.Screen
        name="Call"
        component={TabTwoScreen}
        options={{
          title: 'Call',
          tabBarIcon: ({ color }) => <Zocial name="call" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
