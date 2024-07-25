import axios from "axios";
import React, { useEffect, useState } from "react";
import { chatsType } from "../model/chats";

const ChatPage: React.FC = () => {
  const [chats, setChats] = useState<chatsType[]>([]);

  const fetchChats = async () => {
    try {
      const { data } = await axios.get("/api/chats");
      setChats(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
