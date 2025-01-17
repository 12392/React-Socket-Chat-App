// import axios from "axios";
// import React, { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import { useChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import Mychats from "../components/Mychats";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

const ChatPage: React.FC = () => {
  const { user } = useChatState();
  const [fetchAgain, setFetchAgain] = useState<boolean>(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={"100%"}
        h={"91.5vh"}
        p={"10px"}
      >
        {user && <Mychats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
