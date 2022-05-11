import React, { useState } from "react";
import chatbot from "../Images/Home_Page/chatbot.png";
import "./Chatbot.css";
import CancelIcon from "@mui/icons-material/Cancel";

const Chatbot = (props) => {
  const [showChatbot, setShowChatbot] = useState(true);

  return (
    <div className="chatbot">
      {showChatbot && (
        <div className="message_box">
          <div className="message_greeting">Hey, How Can I Help You</div>
          <div className="cancel_icon" onClick={() => setShowChatbot(false)}>
            <CancelIcon></CancelIcon>
          </div>
        </div>
      )}
      <div className="chatbot_image">
        <img src={chatbot} style={{ width: "80px" }}></img>
      </div>
    </div>
  );
};

export default Chatbot;
