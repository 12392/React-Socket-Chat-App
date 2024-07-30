import React, { useEffect, useState } from "react";
import { useChatState } from "../Context/ChatProvider";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Mychats: React.FC = () => {
  const [loggedUser, setLoggedUser] = useState<any>();
  const { user, setSelectedChat, chats, setChats, selectedChat } = useChatState();
  const toast = useToast();

  const fetchChats = async () => {
    // console.log(user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(
      localStorage.getItem("userInfo") as string
    ));
    fetchChats();
  }, []);


  return <div>My Chats</div>;
};

export default Mychats;
