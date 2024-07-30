import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import { User } from "../model/user";
import { Chat } from "../model/chats";

interface ChatContextType {
  user: User | null;
  chats: Chat[] | null;
  selectedChat: Chat | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setSelectedChat: React.Dispatch<React.SetStateAction<Chat | null>>;
  setChats: React.Dispatch<React.SetStateAction<Chat[] | null>>;
}

// Define the type for the ChatProvider's props
interface ChatProviderProps {
  children: ReactNode;
}

const ChatContext = createContext<ChatContextType | null>(null);

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedChat, setSelectedChat] = useState<Chat | null >(null);
  const [chats, setChats] = useState<Chat[] | null >([]);;
  const history = useHistory();

  useEffect(() => {
    const userInfo: User = JSON.parse(
      localStorage.getItem("userInfo") as string
    );
    setUser(userInfo);
    if (!userInfo) {
      history.push("/");
    }
  }, [history]);

  return (
    <ChatContext.Provider value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatState = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatState must be used within a ChatProvider");
  }
  return context;
};
export default ChatProvider;
