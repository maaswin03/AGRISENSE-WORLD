// import React, { useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const IconButton = styled.button`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   border: none;
//   background-color: #007bff;
//   color: white;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   cursor: pointer;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ModalOverlay = styled.div<{ isOpen: boolean }>`
//   display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
//   position: fixed;
//   bottom: 80px; // Position above the button
//   right: 20px;
//   background: rgba(0, 0, 0, 0.5);
//   justify-content: center;
//   align-items: center;
//   width: 300px;
//   border-radius: 5px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
// `;

// const ModalContent = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 5px;
//   width: 100%;
//   text-align: center;
// `;

// const ChatWindow = styled.div`
//   height: 200px;
//   overflow-y: auto;
//   margin-bottom: 10px;
//   border: 1px solid #ccc;
//   padding: 10px;
// `;

// const Chatbot: React.FC = () => {
//   const [userInput, setUserInput] = useState('');
//   const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const apiKey = "SW2YZGKLYGUXPEHR7FMEDFPY56MX4QDDRSMQ";

//   const toggleModal = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const newMessages = [...messages, { text: userInput, sender: 'user' }];
//     setMessages(newMessages);
//     setUserInput('');

//     try {
//       const response = await axios.post(`https://api.vultrinference.com/v1/chat/completions/RAG`, {
//         collection: "agrisense",
//         model: "llama2-7b-chat-Q5_K_M",
//         messages: [{ role: "user", content: userInput }],
//         max_tokens: 512,
//         temperature: 0.8,
//         top_k: 40,
//         top_p: 0.9
//       }, {
//         headers: {
//           'Authorization': `Bearer ${apiKey}`,
//           'Content-Type': 'application/json'
//         }
//       });
      

//       setMessages([...newMessages, { text: response.data.choices[0].message.content, sender: 'bot' }]);
//     } catch (error) {
//       console.error('Error fetching response:', error);
//       setMessages([...newMessages, { text: "Sorry, I couldn't fetch a response.", sender: 'bot' }]);
//     }
//   };

//   return (
//     <>
//       <IconButton onClick={toggleModal}>+</IconButton>
//       <ModalOverlay isOpen={isOpen}>
//         <ModalContent>
//           <ChatWindow>
//             {messages.map((msg, index) => (
//               <div key={index} className={msg.sender}>
//                 {msg.text}
//               </div>
//             ))}
//           </ChatWindow>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               placeholder="Type a message..."
//             />
//             <button type="submit">Send</button>
//           </form>
//           <button onClick={toggleModal}>Close</button>
//         </ModalContent>
//       </ModalOverlay>
//     </>
//   );
// };

// export default Chatbot;
