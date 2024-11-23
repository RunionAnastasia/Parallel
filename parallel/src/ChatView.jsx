import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext"; // Import the context
import "./styles/ChatView.css";

const ChatView = () => {
  const { likedProfiles } = useContext(AppContext); // Access liked profiles
  const [selectedProfile, setSelectedProfile] = useState(null); // Track the currently selected profile
  const [messages, setMessages] = useState({}); // Store messages for each profile
  const [newMessage, setNewMessage] = useState(""); // Track the current input message

  const handleSendMessage = () => {
    if (!newMessage.trim()) return; // Prevent sending empty messages

    // Add the message to the selected profile's message list
    setMessages((prevMessages) => {
      const updatedMessages = { ...prevMessages };
      if (!updatedMessages[selectedProfile.id]) {
        updatedMessages[selectedProfile.id] = [];
      }
      updatedMessages[selectedProfile.id].push(newMessage);
      return updatedMessages;
    });

    setNewMessage(""); // Clear the input field
  };

  if (likedProfiles.length === 0) {
    return (
      <div className="chat-container">
        <h1>No Matches Yet</h1>
        <p>Like someone in Matchmaking to start chatting!</p>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <h1>Your Matches</h1>
      <div className="chat-list">
        {likedProfiles.map((profile) => (
          <div
            key={profile.id}
            className={`chat-card ${
              selectedProfile?.id === profile.id ? "active" : ""
            }`}
            onClick={() => setSelectedProfile(profile)} // Set selected profile
          >
            <img src={profile.photo} alt={profile.name} className="chat-photo" />
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>
          </div>
        ))}
      </div>

      {selectedProfile && (
        <div className="chat-box">
          <h2>Chat with {selectedProfile.name}</h2>
          <div className="messages">
            {messages[selectedProfile.id]?.length > 0 ? (
              messages[selectedProfile.id].map((message, index) => (
                <div key={index} className="message">
                  {message}
                </div>
              ))
            ) : (
              <p>No messages yet. Start the conversation!</p>
            )}
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatView;
