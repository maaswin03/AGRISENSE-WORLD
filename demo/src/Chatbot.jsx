import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    const apiKey = "SW2YZGKLYGUXPEHR7FMEDFPY56MX4QDDRSMQ";

    console.log(apiKey)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMessages = [...messages, { text: userInput, sender: 'user' }];
        setMessages(newMessages);
        setUserInput('');

        try {
            const response = await axios.post(`https://api.vultrinference.com/v1/chat/completions/RAG`, {
                collection: "agrisense",
                model: "llama2-7b-chat-Q5_K_M",
                messages: [{ role: "user", content: userInput }],
                max_tokens: 512,
                temperature: 0.8,
                top_k: 40,
                top_p: 0.9
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            setMessages([...newMessages, { text: response.data.choices[0].message.content, sender: 'bot' }]);
        } catch (error) {
            console.error('Error fetching response:', error);
            setMessages([...newMessages, { text: "Sorry, I couldn't fetch a response.", sender: 'bot' }]);
        }
    };

    return (
        <div>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
