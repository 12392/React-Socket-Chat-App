import { User } from "./user";

export interface BaseChat {
  _id: string;
  chatName: string;
  isGroupChat: boolean;
  users: User[];
}

export interface GroupChat extends BaseChat {
  isGroupChat: true;
  groupAdmin: User;
}

export interface PrivateChat extends BaseChat {
  isGroupChat: false;
}

export type Chat = GroupChat | PrivateChat;
