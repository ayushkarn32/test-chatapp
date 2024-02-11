import React, { useState } from "react";
import "./App.css";

function App() {
  const [showChatBox, setShowChatBox] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageSend = () => {
    if (userInput.trim() !== "") {
      const newMessage = { text: userInput, sender: "user" };
      const replyMessage = { text: "This is a static message", sender: "bot" };
      setMessages([...messages, newMessage, replyMessage]);
      setUserInput("");
    }
  };

  return (
    <>
      <button
        className="flex items-center cursor-pointer justify-center absolute bottom-5 right-5 text-2xl text-white p-4 rounded-full bg-blue-600 h-[75px] w-[75px]"
        onClick={() => setShowChatBox(!showChatBox)}
      >
        Chat
      </button>
      <div
        className={`w-4/12 absolute bottom-5 right-2 ${
          showChatBox ? "h-[500px]" : "h-[0px]"
        } transition-all delay-200 bg-[#5F4BB6] overflow-hidden rounded-lg`}
      >
        <div className="flex justify-between h-[10%] w-full p-4">
          <div className="text-white">Chat With Us</div>
          <button
            className="rounded-full bg-white text-black flex items-center text-xs justify-center p-4"
            onClick={() => setShowChatBox(!showChatBox)}
          >
            Close
          </button>
        </div>
        <div className="h-[70%] w-full p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.sender === "user"
                  ? "p-4 border-2 rounded-lg border-[#86A5D9] bg-[#86A5D9] my-2 text-right text-white"
                  : "p-4 border-2 rounded-lg border-[#202A25] bg-[#202A25] my-2 text-left text-white"
              }
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center h-[15%] w-full p-4 absolute bottom-0">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            id="userInput"
            placeholder="Enter your message"
            className="p-4 w-[75%]"
          />
          <button
            onClick={handleMessageSend}
            className="p-4 min-w-[100px] bg-blue-500 text-white rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
