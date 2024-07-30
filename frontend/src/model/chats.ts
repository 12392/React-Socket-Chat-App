export interface BaseChat {
  _id: string;
  chatName: string;
  isGroupChat: boolean;
  users: string[];
}

export interface GroupChat extends BaseChat {
  isGroupChat: true;
  groupAdmin: string;
}

export interface PrivateChat extends BaseChat {
  isGroupChat: false;
}

export type Chat = GroupChat | PrivateChat;
