/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
 
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Contact:undefined;
  ChatRoom:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

 
export type BottomTabScreenProps = {
  Camera : undefined;
  Chats : undefined;
  Status : undefined;
  Call : undefined;
}

export type User = {
  id:String;
  name:String;
  imageUri:String;
  status:String;
}

export type Message = {
  id:String;
  content:string;
  createdAt: string;
  user:User;
}

export type ChatRoom={
  id:String;
  users: User[];
  lastMessage:Message;
}
