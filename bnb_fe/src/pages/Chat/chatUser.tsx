import React, { useState, useEffect } from "react";
import { useProfileStore } from "@/store/store";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { fetchMessage } from "@/api";
import axios from "axios";

function ChatUser() {
  const token = useProfileStore((state) => state.token);
  const role = useProfileStore((state) => state.role);
  const { userId } = useParams();
  const navigate = useNavigate();
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  console.log(role)
  const fetchMessages = async (userId, investId, participant) => {
    try {
      const response = await fetchMessage(userId, investId, participant);
      setMessages(response.data.messages);
      console.log(role)
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSendMessage = async (receiver, participants, message) => {
    try {
      const decoded = jwtDecode(token);
  
      // Axios post request to send message
      await axios.post('http://localhost:5000/chat/send', {
        sender: decoded._id,
        receiver,
        participants,
        message: message,
      });
  
      // Update state directly without waiting for fetchMessages
      setMessages([...messages, { message, sender: decoded._id }]);
  
      // Clear the input field
      setMessageInput("");
    } catch (e) {
      console.error('Error sending message:', e);
    }
  };

  useEffect(() => {
    try {
      if (token !== "") {
        const decoded = jwtDecode(token);
        console.log(decoded);
        fetchMessages(userId, decoded._id, "Investigator");
      } else {
        navigate('/signin-investigator');
      }
    } catch (e) {
      console.log(e);
    }
  }, [token]);

  return (
    <div>
      <div>
      {messages.map((msg) => (
  <div key={msg._id}>
    <p>
      <strong>{role === "investigator" ? "Investigator" : "User"}:</strong>
      {msg.message}
    </p>
  </div>
))}
      </div>
      <div>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button onClick={() => handleSendMessage(userId, "Investigator", messageInput)}>Send Message</button>
      </div>
    </div>
  );
}

export default ChatUser;
