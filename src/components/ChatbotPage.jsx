import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/userSlice";
import { Chatbot } from "react-chatbot-kit";
// import MyActionProvider from '../chatbot/MyActionProvider';
// import MyMessageParser from '../chatbot/MyMessageParser';
import "./ChatbotPage.css";
import MyActionProvider from "./chatbot/MyActionProvider";
import MyMessageParser from "./chatbot/MyMessageParser";

const ChatbotPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEnroll = () => {
    dispatch(addUser({ name, age }));
    setShowConfirmation(true);
    setTimeout(() => {
      navigate("/confirmation");
    }, 5000);
  };

  const initialMessages = [
    { role: "system", content: "Hello, Welcome to student info system!" },
    { role: "user", content: "Got it!" },
    { role: "bot", content: "Enter your Name" },
  ];

  return (
    <div className="page-container">
      <Chatbot
        config={{
          initialMessages,
          customStyles: {
            botMessageBox: {
              backgroundColor: "#f0f0f0", // Background color of bot's message
            },
            chatButton: {
              backgroundColor: "#007bff", // Background color of the chat button
            },
          },
        }}
        actionProvider={MyActionProvider}
        messageParser={MyMessageParser}
      />
      {showConfirmation ? (
        <p className="confirmation-message">
          Your name {name} aged {age} has been added to the student system. You
          may now exit.
        </p>
      ) : (
        <div className="form-container">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your Name"
          />
          <select value={age} onChange={handleAgeChange}>
            <option value="">Select Age</option>
            {Array.from({ length: 23 }, (_, i) => 18 + i).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <button className="enroll-button" onClick={handleEnroll}>
            Enroll
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatbotPage;
