import { Chat } from "./chats";
import { User } from "./user";

export interface Message {
  _id: string;
  sender: User;
  content: string;
  chat: Chat;
  readBy: User;
}
